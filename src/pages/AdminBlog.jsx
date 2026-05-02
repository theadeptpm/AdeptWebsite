import React, { useState, useEffect, useRef } from 'react';
import { base44 } from '@/api/base44Client';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Image as ImageIcon, Trash2, Edit, Save, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const categories = [
  'AI Strategy & Implementation',
  'AI for Small Businesses',
  'Project Management & Execution',
  'AI + Project Management',
  'Business Automation & Systems',
  'Frameworks & Tools',
  'Thought Leadership & Insights',
  'Case Studies & Use Cases',
  'Announcements & Milestones',
  'Resources & Guides',
  'AI Compliance & Governance',
];

export default function AdminBlog() {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [view, setView] = useState('list');
  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    base44.auth.isAuthenticated().then(async (authed) => {
      if (authed) {
        const u = await base44.auth.me();
        setUser(u);
      }
      setLoadingAuth(false);
    });
  }, []);

  if (loadingAuth) return <div className="pt-40 text-center flex flex-col items-center"><Loader2 className="w-8 h-8 animate-spin mb-4" />Loading...</div>;

  if (!user) {
    return (
      <div className="pt-40 min-h-screen text-center">
        <h1 className="text-3xl font-bold mb-4 text-[#0d1f3c]">Admin Access Required</h1>
        <Button onClick={() => base44.auth.redirectToLogin()} className="bg-[#f97316] hover:bg-[#ea6a0a]">Login to Continue</Button>
        <p className="mt-4 text-gray-500 max-w-md mx-auto">Note: Use the platform's secure login. There are no hardcoded 'adeptadmin' credentials, please just use your platform account.</p>
      </div>
    );
  }

  return (
    <div className="pt-32 min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-medium text-[#0d1f3c]">Blog Administration</h1>
          {view === 'list' && (
            <Button onClick={() => { setEditingPost(null); setView('form'); }} className="bg-[#f97316] hover:bg-[#ea6a0a]">
              <Plus className="w-4 h-4 mr-2" /> New Post
            </Button>
          )}
          {view === 'form' && (
            <Button variant="outline" onClick={() => setView('list')}>
              Back to List
            </Button>
          )}
        </div>
        
        {view === 'list' ? <BlogList onEdit={(p) => { setEditingPost(p); setView('form'); }} /> : <BlogForm post={editingPost} onSuccess={() => setView('list')} />}
      </div>
    </div>
  );
}

function BlogList({ onEdit }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const data = await base44.entities.BlogPost.list('-created_date', 100);
      setPosts(data);
    } catch (err) {
      toast.error('Failed to load posts');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    if(confirm('Are you sure you want to delete this post?')) {
      await base44.entities.BlogPost.delete(id);
      toast.success('Post deleted');
      fetchPosts();
    }
  };

  if (loading) return <div className="text-center py-20"><Loader2 className="w-8 h-8 animate-spin mx-auto text-[#00b4a6]" /></div>;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50 border-b border-gray-100">
          <tr>
            <th className="text-left p-4 font-medium text-gray-500">Title</th>
            <th className="text-left p-4 font-medium text-gray-500">Category</th>
            <th className="text-left p-4 font-medium text-gray-500">Date</th>
            <th className="text-right p-4 font-medium text-gray-500">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {posts.map(post => (
            <tr key={post.id} className="hover:bg-gray-50 transition-colors">
              <td className="p-4 font-medium text-[#0d1f3c]">{post.title}</td>
              <td className="p-4 text-sm text-gray-600">{post.category}</td>
              <td className="p-4 text-sm text-gray-600">{post.date || new Date(post.created_date).toLocaleDateString()}</td>
              <td className="p-4 text-right">
                <Button variant="ghost" size="sm" onClick={() => onEdit(post)}><Edit className="w-4 h-4" /></Button>
                <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600" onClick={() => handleDelete(post.id)}><Trash2 className="w-4 h-4" /></Button>
              </td>
            </tr>
          ))}
          {posts.length === 0 && (
            <tr><td colSpan="4" className="p-8 text-center text-gray-500">No blog posts found. Create one!</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

function BlogForm({ post, onSuccess }) {
  const [form, setForm] = useState(post || {
    title: '', category: categories[0], date: new Date().toISOString().split('T')[0], tags: [], summary: '', featured_image: '', content: '', url: ''
  });
  const [tagInput, setTagInput] = useState('');
  const [saving, setSaving] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const fileInputRef = useRef(null);

  const handleSave = async () => {
    if (!form.title || !form.category) {
      toast.error('Title and Category are required');
      return;
    }
    setSaving(true);
    try {
      if (post?.id) {
        await base44.entities.BlogPost.update(post.id, form);
        toast.success('Post updated!');
      } else {
        await base44.entities.BlogPost.create(form);
        toast.success('Post created!');
      }
      onSuccess();
    } catch (err) {
      toast.error('Failed to save post');
      console.error(err);
    }
    setSaving(false);
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadingImage(true);
    try {
      const res = await base44.integrations.Core.UploadFile({ file });
      if (res && res.file_url) {
        setForm({ ...form, featured_image: res.file_url });
        toast.success('Image uploaded successfully');
      }
    } catch (err) {
      toast.error('Failed to upload image');
      console.error(err);
    }
    setUploadingImage(false);
  };

  const addTag = () => {
    if (tagInput && !(form.tags || []).includes(tagInput)) {
      setForm({ ...form, tags: [...(form.tags || []), tagInput] });
      setTagInput('');
    }
  };

  const removeTag = (t) => {
    setForm({ ...form, tags: (form.tags || []).filter(tag => tag !== t) });
  };

  const quillRef = useRef(null);
  
  const imageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      if (file) {
        const loadingId = toast.loading('Uploading image...');
        try {
          const res = await base44.integrations.Core.UploadFile({ file });
          if (res && res.file_url) {
            const quill = quillRef.current.getEditor();
            const range = quill.getSelection(true);
            quill.insertEmbed(range.index, 'image', res.file_url);
            toast.success('Image added', { id: loadingId });
          }
        } catch (error) {
          toast.error('Failed to upload image', { id: loadingId });
        }
      }
    };
  };

  const modules = {
    toolbar: {
      container: [
        [{ 'header': [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image'],
        ['clean']
      ],
      handlers: {
        image: imageHandler
      }
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
        <Input value={form.title} onChange={e => setForm({...form, title: e.target.value})} placeholder="Blog Post Title" className="text-lg" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <Select value={form.category} onValueChange={v => setForm({...form, category: v})}>
            <SelectTrigger><SelectValue placeholder="Select Category" /></SelectTrigger>
            <SelectContent>
              {categories.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
          <Input type="text" value={form.date} onChange={e => setForm({...form, date: e.target.value})} placeholder="e.g. Apr 8, 2026" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Summary (Short description)</label>
        <Textarea value={form.summary} onChange={e => setForm({...form, summary: e.target.value})} rows={3} placeholder="A brief summary of the post..." />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Tags</label>
        <div className="flex gap-2 mb-2">
          <Input value={tagInput} onChange={e => setTagInput(e.target.value)} onKeyPress={e => e.key === 'Enter' && addTag()} placeholder="Add a tag and press Enter" className="max-w-xs" />
          <Button type="button" onClick={addTag} variant="outline">Add</Button>
        </div>
        <div className="flex flex-wrap gap-2">
          {(form.tags || []).map(t => (
            <span key={t} className="inline-flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-sm">
              {t} <button onClick={() => removeTag(t)} className="text-gray-500 hover:text-red-500"><Trash2 className="w-3 h-3" /></button>
            </span>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Featured Image</label>
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <Input value={form.featured_image} onChange={e => setForm({...form, featured_image: e.target.value})} placeholder="Image URL or upload..." />
          </div>
          <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
          <Button type="button" variant="outline" onClick={() => fileInputRef.current?.click()} disabled={uploadingImage}>
            {uploadingImage ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <ImageIcon className="w-4 h-4 mr-2" />}
            Upload Image
          </Button>
        </div>
        {form.featured_image && (
          <img src={form.featured_image} alt="Featured" className="mt-4 h-40 object-cover rounded-xl border border-gray-200" />
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Content (Rich Text)</label>
        <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
          <ReactQuill 
            ref={quillRef}
            theme="snow" 
            value={form.content || ''} 
            onChange={v => setForm({...form, content: v})} 
            modules={modules}
            className="min-h-[300px]"
          />
        </div>
        <style dangerouslySetInnerHTML={{__html: `.ql-editor { min-height: 300px; font-size: 16px; }`}} />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">External URL (Optional - redirects instead of showing content)</label>
        <Input value={form.url} onChange={e => setForm({...form, url: e.target.value})} placeholder="https://..." />
      </div>

      <div className="pt-6 border-t border-gray-100 flex justify-end">
        <Button onClick={handleSave} disabled={saving} className="bg-[#00b4a6] hover:bg-[#009b8f] text-white">
          {saving ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Save className="w-4 h-4 mr-2" />}
          Save Post
        </Button>
      </div>
    </div>
  );
}