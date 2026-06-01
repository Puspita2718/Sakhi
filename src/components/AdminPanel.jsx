import React, { useState } from 'react';
import { Shield, Users, Activity, MessageSquare, Trash2, CheckCircle2, AlertTriangle, Plus, BarChart3 } from 'lucide-react';

export default function AdminPanel({ language }) {
  const [adminTab, setAdminTab] = useState('users');

  // Admin users list state
  const [users, setUsers] = useState([
    { id: 'u-101', name: 'Ananya Sharma', email: 'ananya@example.com', plan: 'Standard', status: 'Active' },
    { id: 'u-102', name: 'Meera Kapoor', email: 'meera@example.com', plan: 'Premium', status: 'Active' },
    { id: 'u-103', name: 'Sneha Rao', email: 'sneha@example.com', plan: 'Free', status: 'Active' },
    { id: 'u-104', name: 'Rhea Sen', email: 'rhea@example.com', plan: 'Basic', status: 'Suspended' }
  ]);

  // Doctor Approvals list state
  const [doctors, setDoctors] = useState([
    { id: 'd-201', name: 'Dr. Shalini Iyer', specialty: 'Gynecologist', status: 'Approved' },
    { id: 'd-202', name: 'Dr. Rohan Sharma', specialty: 'Reproductive Specialist', status: 'Approved' },
    { id: 'd-203', name: 'Dr. Priya Sen', specialty: 'Dietitian & Nutritionist', status: 'Approved' },
    { id: 'd-204', name: 'Dr. Aditi Verma', specialty: 'Intimate Care Expert', status: 'Pending Approval' }
  ]);

  // Flags Forum Posts list
  const [flaggedPosts, setFlaggedPosts] = useState([
    { id: 'fp-301', title: 'Suspicious pills review request...', content: 'Selling cheap estrogen pills directly via whatsapp...', flaggedReason: 'Unauthorized drug advertisement' }
  ]);

  const handleToggleUserStatus = (id) => {
    setUsers(prev => prev.map(u => {
      if (u.id === id) {
        return { ...u, status: u.status === 'Active' ? 'Suspended' : 'Active' };
      }
      return u;
    }));
  };

  const handleApproveDoctor = (id) => {
    setDoctors(prev => prev.map(d => {
      if (d.id === id) {
        return { ...d, status: 'Approved' };
      }
      return d;
    }));
  };

  const handleDeleteFlaggedPost = (id) => {
    setFlaggedPosts(prev => prev.filter(p => p.id !== id));
  };

  return (
    <div className="slide-in flex flex-col gap-8">
      
      {/* 1. ADMIN HEADER SUMMARY CARD */}
      <div className="glass-panel p-8 rounded-3xl bg-gradient-to-tr from-indigo-50/50 to-purple-50/50 dark:from-zinc-900/40 dark:to-zinc-950/40 display: flex justify-between items-center flex-wrap gap-6">
        <div>
          <h1 className="font-display text-3xl font-extrabold tracking-tight dark:text-white flex items-center gap-2">
            <Shield size={28} className="text-indigo-500" /> Administrative Core Panel
          </h1>
          <p className="text-xs text-gray-500 dark:text-zinc-400 mt-1">Manage users, approve doctors, handle subscriptions, and moderate public forums.</p>
        </div>

        {/* Total system metrics */}
        <div className="flex gap-4">
          <div className="bg-white/80 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 p-4 rounded-xl text-center">
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Total Users</span>
            <strong className="block text-xl text-indigo-600 dark:text-indigo-400 mt-1">1,248</strong>
          </div>
          <div className="bg-white/80 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 p-4 rounded-xl text-center">
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Active Subs</span>
            <strong className="block text-xl text-emerald-600 dark:text-emerald-400 mt-1">456</strong>
          </div>
        </div>
      </div>

      {/* 2. ADMIN SUB-TABS SELECTOR */}
      <div className="flex gap-2.5 border-b border-gray-200/50 dark:border-zinc-800 pb-2 overflow-x-auto">
        <button
          onClick={() => setAdminTab('users')}
          className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold transition-all ${adminTab === 'users' ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-500 hover:text-indigo-600'}`}
        >
          <Users size={14} /> Manage Users
        </button>
        <button
          onClick={() => setAdminTab('doctors')}
          className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold transition-all ${adminTab === 'doctors' ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-500 hover:text-indigo-600'}`}
        >
          <Activity size={14} /> Doctor Approvals
        </button>
        <button
          onClick={() => setAdminTab('forum')}
          className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold transition-all ${adminTab === 'forum' ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-500 hover:text-indigo-600'}`}
        >
          <MessageSquare size={14} /> Forum Moderation
        </button>
      </div>

      {/* 3. SUB-TAB VIEWPORTS */}
      <div className="glass-panel p-6 rounded-2xl">
        
        {/* USERS MANAGER TABLE */}
        {adminTab === 'users' && (
          <div className="flex flex-col gap-4">
            <h3 className="font-display font-bold text-lg dark:text-white">Registered Users</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-gray-100 dark:border-zinc-800 text-gray-400 font-bold">
                    <th className="py-3 px-4">User ID</th>
                    <th className="py-3 px-4">Name</th>
                    <th className="py-3 px-4">Email</th>
                    <th className="py-3 px-4">Active Subscription</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(u => (
                    <tr key={u.id} className="border-b border-gray-50/50 dark:border-zinc-900 text-gray-700 dark:text-zinc-300">
                      <td className="py-3 px-4 font-mono">{u.id}</td>
                      <td className="py-3 px-4 font-semibold">{u.name}</td>
                      <td className="py-3 px-4">{u.email}</td>
                      <td className="py-3 px-4">
                        <span className="bg-purple-100 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 px-2 py-0.5 rounded text-[10px] font-bold">
                          {u.plan}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${u.status === 'Active' ? 'bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600' : 'bg-red-100 dark:bg-red-950/40 text-red-600'}`}>
                          {u.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <button
                          onClick={() => handleToggleUserStatus(u.id)}
                          className={`px-3 py-1 rounded text-[10px] font-bold transition-all border ${u.status === 'Active' ? 'border-red-200 text-red-500 hover:bg-red-500 hover:text-white' : 'border-emerald-200 text-emerald-500 hover:bg-emerald-500 hover:text-white'}`}
                        >
                          {u.status === 'Active' ? 'Suspend' : 'Unsuspend'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* DOCTORS APPROVAL MANAGER */}
        {adminTab === 'doctors' && (
          <div className="flex flex-col gap-4">
            <h3 className="font-display font-bold text-lg dark:text-white">Gynecologists & Speciality Registrations</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-gray-100 dark:border-zinc-800 text-gray-400 font-bold">
                    <th className="py-3 px-4">Doctor ID</th>
                    <th className="py-3 px-4">Doctor Name</th>
                    <th className="py-3 px-4">Specialty</th>
                    <th className="py-3 px-4">License Verification</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {doctors.map(d => (
                    <tr key={d.id} className="border-b border-gray-50/50 dark:border-zinc-900 text-gray-700 dark:text-zinc-300">
                      <td className="py-3 px-4 font-mono">{d.id}</td>
                      <td className="py-3 px-4 font-semibold">{d.name}</td>
                      <td className="py-3 px-4 text-indigo-600 dark:text-indigo-400 font-semibold">{d.specialty}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${d.status === 'Approved' ? 'bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600' : 'bg-amber-100 dark:bg-amber-950/40 text-amber-600'}`}>
                          {d.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        {d.status === 'Pending Approval' ? (
                          <button
                            onClick={() => handleApproveDoctor(d.id)}
                            className="px-3 py-1 border border-emerald-200 text-emerald-500 rounded text-[10px] font-bold hover:bg-emerald-500 hover:text-white transition-all"
                          >
                            Approve License
                          </button>
                        ) : (
                          <span className="text-[10px] text-gray-400 font-bold">Verified License</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* FORUM MODERATOR */}
        {adminTab === 'forum' && (
          <div className="flex flex-col gap-4">
            <h3 className="font-display font-bold text-lg dark:text-white">Flagged Community Submissions</h3>
            
            {flaggedPosts.length === 0 ? (
              <div className="text-center py-10 text-gray-400 text-xs">
                Excellent. Zero flagged threads in system queues.
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {flaggedPosts.map(post => (
                  <div key={post.id} className="p-4 rounded-xl bg-red-500/5 border border-red-200 dark:border-red-900/50 flex flex-col gap-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest flex items-center gap-1">
                          <AlertTriangle size={12} /> Flagged Reason: {post.flaggedReason}
                        </span>
                        <h4 className="font-bold text-sm dark:text-white mt-1">{post.title}</h4>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleDeleteFlaggedPost(post.id)}
                          className="p-2 border border-red-200 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all"
                          title="Delete Post"
                        >
                          <Trash2 size={13} />
                        </button>
                        <button
                          onClick={() => handleDeleteFlaggedPost(post.id)} // Mock approval
                          className="p-2 border border-emerald-200 text-emerald-500 rounded-lg hover:bg-emerald-500 hover:text-white transition-all"
                          title="Dismiss Flag"
                        >
                          <CheckCircle2 size={13} />
                        </button>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-zinc-400 leading-normal">{post.content}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>

    </div>
  );
}
