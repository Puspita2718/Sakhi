import React, { useState } from 'react';
import { 
  Users, MessageCircle, Heart, Plus, Search, ShieldCheck, 
  TrendingUp, BarChart2, Star, Video, BookOpen, Podcast, 
  Trophy, BadgeCheck, Share2, Bookmark, CheckCircle2, User
} from 'lucide-react';

export default function CommunityPlatform({ language = 'en' }) {
  const [anonInput, setAnonInput] = useState('');
  const [pollVoted, setPollVoted] = useState(false);
  const [activePoll, setActivePoll] = useState(null);

  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Priya M.',
      badge: 'Helpful Contributor',
      avatar: 'P',
      time: '2 hours ago',
      content: 'Has anyone tried seed cycling for regulating periods? I started last month and I think I am already seeing a difference in my energy levels during the luteal phase!',
      likes: 45,
      comments: 12,
      isResource: false
    },
    {
      id: 2,
      author: 'Anonymous',
      badge: '',
      avatar: '?',
      time: '5 hours ago',
      content: 'Is it normal to have severe back pain on the first day of menstruation? I usually only get cramps but this month the back pain is unbearable.',
      likes: 89,
      comments: 34,
      isResource: false
    },
    {
      id: 3,
      author: 'Dr. Neha (Nutritionist)',
      badge: 'Expert',
      avatar: 'D',
      time: '1 day ago',
      content: 'Sharing my top 5 iron-rich smoothie recipes for the menstrual phase. Remember, vitamin C helps with iron absorption, so always add a squeeze of lemon or some strawberries!',
      likes: 210,
      comments: 56,
      isResource: true,
      resourceType: 'Article',
      resourceTitle: '5 Iron-Rich Smoothies for Menstruation'
    }
  ]);

  const handleAnonSubmit = () => {
    if (!anonInput.trim()) return;
    const newPost = {
      id: Date.now(),
      author: 'Anonymous',
      badge: '',
      avatar: '?',
      time: 'Just now',
      content: anonInput,
      likes: 0,
      comments: 0,
      isResource: false
    };
    setPosts([newPost, ...posts]);
    setAnonInput('');
  };

  const handlePollVote = (option) => {
    setPollVoted(true);
    setActivePoll(option);
  };

  return (
    <div className="flex flex-col gap-6 w-full animate-fade-in pb-12">

      {/* SECTION 1: Community Welcome Card (Hero) */}
      <div className="glass-panel p-6 rounded-3xl border border-pink-100/50 dark:border-zinc-800 bg-gradient-to-r from-pink-50 to-white dark:from-zinc-900 dark:to-zinc-950 flex flex-col md:flex-row justify-between items-center gap-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-300/10 blur-3xl rounded-full pointer-events-none"></div>
        <div className="z-10 flex-1">
           <h1 className="font-display text-2xl font-extrabold text-[var(--text-primary)] mb-2 flex items-center gap-2">
             🌸 Welcome to the Sakhi Community
           </h1>
           <p className="text-sm font-medium text-[var(--text-secondary)] mb-6 max-w-2xl">
             A safe space where women can share experiences, ask questions, and support each other.
           </p>
           <div className="flex flex-wrap gap-4 mb-6">
             <div className="bg-white/60 dark:bg-zinc-800/60 p-3 rounded-2xl border border-white/40 dark:border-zinc-700/40 flex items-center gap-3">
               <Users className="w-5 h-5 text-pink-500" />
               <div>
                 <span className="text-[10px] font-extrabold text-[var(--text-secondary)] uppercase block">Active Members Today</span>
                 <p className="text-sm font-black text-[var(--text-primary)]">125</p>
               </div>
             </div>
             <div className="bg-white/60 dark:bg-zinc-800/60 p-3 rounded-2xl border border-white/40 dark:border-zinc-700/40 flex items-center gap-3">
               <MessageCircle className="w-5 h-5 text-blue-500" />
               <div>
                 <span className="text-[10px] font-extrabold text-[var(--text-secondary)] uppercase block">Discussions Today</span>
                 <p className="text-sm font-black text-[var(--text-primary)]">42</p>
               </div>
             </div>
             <div className="bg-white/60 dark:bg-zinc-800/60 p-3 rounded-2xl border border-white/40 dark:border-zinc-700/40 flex items-center gap-3">
               <Heart className="w-5 h-5 text-rose-500" />
               <div>
                 <span className="text-[10px] font-extrabold text-[var(--text-secondary)] uppercase block">Supportive Replies</span>
                 <p className="text-sm font-black text-[var(--text-primary)]">198</p>
               </div>
             </div>
           </div>
           
           <div className="flex gap-3">
             <button className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-colors shadow-sm cursor-pointer">
               <Plus size={16} /> Create Post
             </button>
             <button className="bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-[var(--text-primary)] hover:bg-gray-50 dark:hover:bg-zinc-700 px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-colors shadow-sm cursor-pointer">
               <User size={16} /> Ask Anonymously
             </button>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* LEFT COLUMN: Stats, Circles, Challenges */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          
          {/* SECTION 15: Community Statistics Dashboard */}
          <div className="glass-panel p-5 rounded-3xl border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
             <h3 className="font-display font-extrabold text-sm flex items-center gap-2 mb-4 text-[var(--text-primary)] uppercase tracking-wider">
               <BarChart2 className="w-4 h-4 text-emerald-500" /> Community Stats
             </h3>
             <div className="grid grid-cols-2 gap-2">
               <div className="bg-gray-50 dark:bg-zinc-950 p-3 rounded-xl text-center">
                 <p className="text-lg font-black text-emerald-600">58</p>
                 <span className="text-[9px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider">Online Now</span>
               </div>
               <div className="bg-gray-50 dark:bg-zinc-950 p-3 rounded-xl text-center">
                 <p className="text-lg font-black text-blue-600">42</p>
                 <span className="text-[9px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider">Posts Today</span>
               </div>
               <div className="bg-gray-50 dark:bg-zinc-950 p-3 rounded-xl text-center">
                 <p className="text-lg font-black text-purple-600">186</p>
                 <span className="text-[9px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider">Comments</span>
               </div>
               <div className="bg-gray-50 dark:bg-zinc-950 p-3 rounded-xl text-center">
                 <p className="text-lg font-black text-pink-600">14</p>
                 <span className="text-[9px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider">New Members</span>
               </div>
             </div>
          </div>

          {/* SECTION 6: Support Circles & SECTION 14: Recommendations */}
          <div className="glass-panel p-5 rounded-3xl border border-pink-100 dark:border-pink-900/30 bg-pink-50/30 dark:bg-pink-950/10">
             <h3 className="font-display font-extrabold text-sm flex items-center gap-2 mb-4 text-[var(--text-primary)] uppercase tracking-wider">
               🌸 Support Circles
             </h3>
             <div className="flex flex-col gap-3 mb-4">
               {['PCOS Warriors', 'Period Care Circle', 'Mental Wellness Circle'].map(circle => (
                 <div key={circle} className="flex justify-between items-center bg-white/60 dark:bg-zinc-900/60 p-2.5 rounded-xl border border-white dark:border-zinc-800 hover:border-pink-300 transition-colors">
                   <span className="text-xs font-bold text-[var(--text-primary)] truncate flex-1">{circle}</span>
                   <button className="text-[10px] font-extrabold text-pink-600 bg-pink-100 dark:bg-pink-900/30 px-2 py-1 rounded-md hover:bg-pink-200 transition-colors cursor-pointer shrink-0">Join</button>
                 </div>
               ))}
             </div>
             
             <div className="pt-3 border-t border-pink-200 dark:border-pink-900/50">
               <span className="text-[10px] font-extrabold text-[var(--text-secondary)] uppercase block mb-2">Suggested For You</span>
               <div className="flex justify-between items-center bg-white/60 dark:bg-zinc-900/60 p-2.5 rounded-xl border border-white dark:border-zinc-800">
                 <span className="text-xs font-bold text-[var(--text-primary)] truncate flex-1">College Girls Hub</span>
                 <button className="text-[10px] font-extrabold text-pink-600 bg-pink-100 dark:bg-pink-900/30 px-2 py-1 rounded-md hover:bg-pink-200 transition-colors cursor-pointer shrink-0">Join</button>
               </div>
             </div>
          </div>

          {/* SECTION 10: Community Challenges */}
          <div className="glass-panel p-5 rounded-3xl border border-yellow-100 dark:border-yellow-900/30 bg-yellow-50/50 dark:bg-yellow-950/10">
             <h3 className="font-display font-extrabold text-sm flex items-center gap-2 mb-4 text-yellow-700 dark:text-yellow-500 uppercase tracking-wider">
               🏆 Active Challenges
             </h3>
             <div className="flex flex-col gap-3">
               <div className="bg-white/60 dark:bg-zinc-900/60 p-3 rounded-xl border border-yellow-200/50 dark:border-yellow-900/30 cursor-pointer hover:-translate-y-0.5 transition-transform">
                 <p className="text-xs font-bold text-[var(--text-primary)] mb-1">7-Day Hydration Challenge</p>
                 <span className="text-[10px] font-extrabold text-yellow-600 flex items-center gap-1"><Users size={12} /> 1,240 Participants</span>
               </div>
               <div className="bg-white/60 dark:bg-zinc-900/60 p-3 rounded-xl border border-yellow-200/50 dark:border-yellow-900/30 cursor-pointer hover:-translate-y-0.5 transition-transform">
                 <p className="text-xs font-bold text-[var(--text-primary)] mb-1">30-Day Yoga Challenge</p>
                 <span className="text-[10px] font-extrabold text-yellow-600 flex items-center gap-1"><Users size={12} /> 856 Participants</span>
               </div>
             </div>
          </div>

          {/* SECTION 12: Recognition System */}
          <div className="glass-panel p-5 rounded-3xl border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
             <h3 className="font-display font-extrabold text-sm flex items-center gap-2 mb-4 text-[var(--text-primary)] uppercase tracking-wider">
               <BadgeCheck className="w-4 h-4 text-indigo-500" /> Your Badges
             </h3>
             <div className="flex flex-wrap gap-2">
               <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-900/30 p-2 rounded-lg flex items-center gap-2" title="Wellness Explorer">
                 <span className="text-lg">🧭</span>
                 <span className="text-[10px] font-bold text-indigo-700 dark:text-indigo-300">Explorer</span>
               </div>
               <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-100 dark:border-orange-900/30 p-2 rounded-lg flex items-center gap-2" title="Helpful Contributor">
                 <span className="text-lg">🤝</span>
                 <span className="text-[10px] font-bold text-orange-700 dark:text-orange-300">Contributor</span>
               </div>
             </div>
          </div>

        </div>

        {/* CENTER COLUMN: Feed, Polls, Posting */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          
          {/* SECTION 3: Anonymous Question Box */}
          <div className="glass-panel p-5 rounded-3xl border border-indigo-100 dark:border-indigo-900/30 bg-indigo-50/50 dark:bg-indigo-950/10">
             <div className="flex justify-between items-center mb-3">
               <h3 className="font-display font-extrabold text-sm flex items-center gap-2 text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                 <User className="w-4 h-4" /> Ask Anonymously
               </h3>
               <span className="text-[9px] font-bold bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-2 py-0.5 rounded-full">100% Safe</span>
             </div>
             <textarea 
               value={anonInput}
               onChange={(e) => setAnonInput(e.target.value)}
               placeholder="Ask any health question without revealing your identity..."
               className="w-full h-24 p-4 rounded-2xl border border-white dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 text-sm font-medium text-[var(--text-primary)] outline-none focus:border-indigo-300 resize-none transition-colors mb-3 shadow-inner"
             />
             <div className="flex justify-end">
               <button 
                 onClick={handleAnonSubmit}
                 className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-xl text-xs font-bold transition-colors shadow-sm cursor-pointer disabled:opacity-50"
                 disabled={!anonInput.trim()}
               >
                 Post Anonymously
               </button>
             </div>
          </div>

          {/* SECTION 4: Community Polls */}
          <div className="glass-panel p-6 rounded-3xl border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
             <h3 className="font-display font-extrabold text-sm flex items-center gap-2 mb-4 text-[var(--text-primary)] uppercase tracking-wider">
               📊 Weekly Community Poll
             </h3>
             <p className="text-sm font-bold text-[var(--text-primary)] mb-4">How do you manage period cramps?</p>
             <div className="flex flex-col gap-2">
               {[
                 { label: 'Yoga & Stretching', pct: 35 },
                 { label: 'Diet changes / Teas', pct: 20 },
                 { label: 'Medication', pct: 40 },
                 { label: 'Heat pads & Rest', pct: 5 }
               ].map(opt => (
                 <div 
                   key={opt.label} 
                   onClick={() => !pollVoted && handlePollVote(opt.label)}
                   className={`relative overflow-hidden rounded-xl border p-3 cursor-pointer transition-all ${activePoll === opt.label ? 'border-pink-500 bg-pink-50 dark:bg-pink-900/20' : 'border-gray-200 dark:border-zinc-700 hover:border-pink-300'}`}
                 >
                   {pollVoted && (
                     <div 
                       className="absolute top-0 left-0 bottom-0 bg-pink-100 dark:bg-pink-900/30 transition-all duration-1000 ease-out" 
                       style={{ width: `${opt.pct}%` }}
                     ></div>
                   )}
                   <div className="relative z-10 flex justify-between items-center text-xs font-bold text-[var(--text-primary)]">
                     <span>{opt.label}</span>
                     {pollVoted && <span>{opt.pct}%</span>}
                   </div>
                 </div>
               ))}
             </div>
             {pollVoted && <p className="text-[10px] font-bold text-[var(--text-secondary)] mt-3 text-center">Thanks for voting! 842 total votes.</p>}
          </div>

          {/* SECTION 7: Community Feed */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display font-extrabold text-sm text-[var(--text-primary)] uppercase tracking-wider mb-2">Recent Discussions</h3>
            
            {posts.map(post => (
              <div key={post.id} className="glass-panel p-5 rounded-3xl border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm animate-fade-in hover:shadow-md transition-shadow">
                
                {/* Header */}
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-zinc-800 flex items-center justify-center font-bold text-[var(--text-primary)] border border-gray-200 dark:border-zinc-700 shrink-0">
                      {post.avatar}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-bold text-[var(--text-primary)]">{post.author}</h4>
                        {post.badge && (
                          <span className="text-[9px] font-extrabold bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-1.5 py-0.5 rounded flex items-center gap-0.5">
                            <BadgeCheck size={10}/> {post.badge}
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] font-semibold text-[var(--text-secondary)]">{post.time}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <p className="text-sm font-medium text-[var(--text-primary)] leading-relaxed mb-4">
                  {post.content}
                </p>

                {/* SECTION 11: Resource Sharing Hub (Inline) */}
                {post.isResource && (
                  <div className="mb-4 p-3 border border-gray-200 dark:border-zinc-700 rounded-xl bg-gray-50 dark:bg-zinc-950 flex items-center gap-3 cursor-pointer hover:border-pink-300 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center shrink-0">
                      <BookOpen className="w-5 h-5 text-pink-500" />
                    </div>
                    <div>
                      <span className="text-[9px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider">{post.resourceType}</span>
                      <p className="text-xs font-bold text-[var(--text-primary)]">{post.resourceTitle}</p>
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-zinc-800">
                  <div className="flex gap-4">
                    <button className="flex items-center gap-1.5 text-[11px] font-bold text-[var(--text-secondary)] hover:text-pink-500 transition-colors cursor-pointer group">
                      <Heart size={16} className="group-hover:fill-pink-500" /> {post.likes}
                    </button>
                    <button className="flex items-center gap-1.5 text-[11px] font-bold text-[var(--text-secondary)] hover:text-blue-500 transition-colors cursor-pointer">
                      <MessageCircle size={16} /> {post.comments} Reply
                    </button>
                  </div>
                  <div className="flex gap-3">
                    <button className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer">
                      <Bookmark size={16} />
                    </button>
                    <button className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer">
                      <Share2 size={16} />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* RIGHT COLUMN: Topics, Experts, Safety */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          
          {/* SECTION 13: Community Safety Features */}
          <div className="glass-panel p-5 rounded-3xl border border-emerald-100 dark:border-emerald-900/30 bg-emerald-50/50 dark:bg-emerald-950/10">
             <h3 className="font-display font-extrabold text-sm flex items-center gap-2 mb-3 text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
               <ShieldCheck className="w-4 h-4" /> Safe Community
             </h3>
             <p className="text-[10px] font-semibold text-[var(--text-secondary)] mb-3 leading-relaxed">
               This is a moderated space. AI and admins work together to:
             </p>
             <ul className="flex flex-col gap-1.5">
               <li className="flex items-center gap-2 text-[10px] font-bold text-[var(--text-primary)]"><CheckCircle2 size={12} className="text-emerald-500" /> Detect misinformation</li>
               <li className="flex items-center gap-2 text-[10px] font-bold text-[var(--text-primary)]"><CheckCircle2 size={12} className="text-emerald-500" /> Prevent harassment</li>
               <li className="flex items-center gap-2 text-[10px] font-bold text-[var(--text-primary)]"><CheckCircle2 size={12} className="text-emerald-500" /> Flag unsafe medical advice</li>
             </ul>
          </div>

          {/* SECTION 2: Trending Topics */}
          <div className="glass-panel p-5 rounded-3xl border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
             <h3 className="font-display font-extrabold text-sm flex items-center gap-2 mb-4 text-[var(--text-primary)] uppercase tracking-wider">
               <TrendingUp className="w-4 h-4 text-orange-500" /> Trending Topics
             </h3>
             <div className="flex flex-wrap gap-2">
               {['🔥 PCOS Support', '🩸 Period Health', '🍎 Nutrition', '🧘 Mental Wellness', '💖 Self Care'].map(tag => (
                 <span key={tag} className="text-[10px] font-bold bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 px-3 py-1.5 rounded-full cursor-pointer hover:border-orange-300 transition-colors">
                   {tag}
                 </span>
               ))}
             </div>
          </div>

          {/* SECTION 5: Expert Corner */}
          <div className="glass-panel p-5 rounded-3xl border border-blue-100 dark:border-blue-900/30 bg-blue-50/30 dark:bg-blue-950/10">
             <h3 className="font-display font-extrabold text-sm flex items-center gap-2 mb-4 text-blue-700 dark:text-blue-400 uppercase tracking-wider">
               👩‍⚕️ Expert Corner
             </h3>
             <div className="flex flex-col gap-3">
               <div className="bg-white/60 dark:bg-zinc-900/60 p-3 rounded-xl border border-white dark:border-zinc-800">
                 <div className="flex items-center gap-2 mb-1">
                   <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center font-bold text-xs text-blue-600">D</div>
                   <span className="text-[11px] font-bold text-[var(--text-primary)]">Dr. Sharma (Gynecologist)</span>
                 </div>
                 <p className="text-[10px] font-medium text-[var(--text-secondary)] italic">"Top answered question this week regarding irregular cycles..."</p>
               </div>
               <div className="bg-white/60 dark:bg-zinc-900/60 p-3 rounded-xl border border-white dark:border-zinc-800">
                 <div className="flex items-center gap-2 mb-1">
                   <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center font-bold text-xs text-purple-600">N</div>
                   <span className="text-[11px] font-bold text-[var(--text-primary)]">Nina (Yoga Coach)</span>
                 </div>
                 <p className="text-[10px] font-medium text-[var(--text-secondary)] italic">"Shared a 5-minute desk stretch for lower back pain."</p>
               </div>
             </div>
          </div>

          {/* SECTION 8: Success Stories */}
          <div className="glass-panel p-5 rounded-3xl border border-yellow-100 dark:border-yellow-900/30 bg-gradient-to-br from-yellow-50 to-white dark:from-yellow-900/20 dark:to-zinc-900">
             <h3 className="font-display font-extrabold text-sm flex items-center gap-2 mb-3 text-yellow-600 dark:text-yellow-500 uppercase tracking-wider">
               🌟 Success Stories
             </h3>
             <ul className="flex flex-col gap-2">
               <li className="text-[11px] font-bold text-[var(--text-primary)] flex items-start gap-1.5 hover:text-yellow-600 cursor-pointer transition-colors"><Star size={12} className="text-yellow-500 shrink-0 mt-0.5" /> "My 6-month PCOS improvement journey."</li>
               <li className="text-[11px] font-bold text-[var(--text-primary)] flex items-start gap-1.5 hover:text-yellow-600 cursor-pointer transition-colors"><Star size={12} className="text-yellow-500 shrink-0 mt-0.5" /> "Finally managed my cycle regularity!"</li>
             </ul>
          </div>

          {/* SECTION 9: AI Community Summary */}
          <div className="glass-panel p-5 rounded-3xl border border-indigo-100 dark:border-indigo-900/30 bg-indigo-50/30 dark:bg-indigo-950/10">
             <h3 className="font-display font-extrabold text-sm flex items-center gap-2 mb-3 text-indigo-700 dark:text-indigo-400 uppercase tracking-wider">
               🤖 AI Weekly Summary
             </h3>
             <div className="flex flex-col gap-2">
               <div>
                 <span className="text-[9px] font-extrabold text-[var(--text-secondary)] uppercase block">Trending Topic</span>
                 <p className="text-[11px] font-bold text-[var(--text-primary)]">PCOS Nutrition</p>
               </div>
               <div>
                 <span className="text-[9px] font-extrabold text-[var(--text-secondary)] uppercase block">Most Discussed</span>
                 <p className="text-[11px] font-bold text-[var(--text-primary)]">Period Pain Relief</p>
               </div>
               <div>
                 <span className="text-[9px] font-extrabold text-[var(--text-secondary)] uppercase block">Most Helpful Advice</span>
                 <p className="text-[11px] font-medium text-[var(--text-primary)] italic">"Increase hydration and maintain sleep consistency to combat luteal fatigue."</p>
               </div>
             </div>
          </div>

        </div>

      </div>
    </div>
  );
}
