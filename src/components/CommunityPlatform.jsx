import React, { useState } from 'react';
import { MessageSquare, Heart, Share2, Plus, Sparkles, User, ShieldAlert } from 'lucide-react';

export default function CommunityPlatform({ language }) {
  const [activeForumCategory, setActiveForumCategory] = useState('pcos');
  
  // Custom posting states
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [postAnonymous, setPostAnonymous] = useState(false);

  const [forumPosts, setForumPosts] = useState([
    {
      id: 'p-1',
      category: 'pcos',
      title: 'Struggling with spearmint tea scheduling... does it actually help?',
      content: 'I was recently diagnosed with mild PCOS and my gynecologist suggested spearmint tea for hirsutism. Has anyone tried it? When do you drink it during your cycle?',
      author: 'Anonymous User',
      isAnonymous: true,
      likes: 12,
      replies: [
        { author: 'Meera K', text: 'Yes, it works! I have been drinking it twice daily during my luteal phase and noticed significant improvements after three months.' },
        { author: 'Dr. Priya Sen', text: 'Spearmint acts as an anti-androgen. Two cups daily is standard. Combine this with low-GI meals for optimal hormonal balance.' }
      ],
      liked: false
    },
    {
      id: 'p-2',
      category: 'pcos',
      title: 'Weight lifting vs Cardiovascular training for PCOS insulin resistance',
      content: 'I have heard mixed advice on workout types. Some say heavy cardio increases cortisol which worsens insulin issues, while strength training helps build muscle to absorb glucose.',
      author: 'Ananya S',
      isAnonymous: false,
      likes: 24,
      replies: [],
      liked: false
    },
    {
      id: 'p-3',
      category: 'pregnancy',
      title: 'Early signs of implantation cramping?',
      content: 'I am on day 22 of a 28-day cycle and experiencing mild pink spotting and cramps. Could this be implantation? My husband and I are trying to conceive.',
      author: 'Anonymous User',
      isAnonymous: true,
      likes: 8,
      replies: [],
      liked: false
    }
  ]);

  const handleCreatePost = () => {
    if (!postTitle.trim() || !postContent.trim()) return;

    const newPost = {
      id: `p-${forumPosts.length + 1}`,
      category: activeForumCategory,
      title: postTitle,
      content: postContent,
      author: postAnonymous ? 'Anonymous User' : 'Ananya S',
      isAnonymous: postAnonymous,
      likes: 0,
      replies: [],
      liked: false
    };

    setForumPosts([newPost, ...forumPosts]);
    setPostTitle('');
    setPostContent('');
    setPostAnonymous(false);
  };

  const handleToggleLike = (id) => {
    setForumPosts(prev => prev.map(p => {
      if (p.id === id) {
        return {
          ...p,
          likes: p.liked ? p.likes - 1 : p.likes + 1,
          liked: !p.liked
        };
      }
      return p;
    }));
  };

  const filteredPosts = forumPosts.filter(p => p.category === activeForumCategory);

  return (
    <div className="slide-in" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '30px' }} className="grid-2">
      
      {/* Left Column: Feed & Category tabs */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* Category selections */}
        <div className="glass-panel" style={{ padding: '16px', display: 'flex', gap: '10px', overflowX: 'auto' }}>
          {[
            { id: 'pcos', label: 'PCOS Support' },
            { id: 'pregnancy', label: 'Pregnancy Journey' },
            { id: 'hygiene', label: 'Hygiene & Clean' },
            { id: 'mental_health', label: 'Mental Wellness' }
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveForumCategory(cat.id)}
              style={{
                padding: '8px 16px',
                borderRadius: '20px',
                border: '1px solid',
                borderColor: activeForumCategory === cat.id ? 'var(--primary)' : 'var(--border-color)',
                background: activeForumCategory === cat.id ? 'var(--primary)' : 'transparent',
                color: activeForumCategory === cat.id ? 'white' : 'var(--text-primary)',
                fontSize: '12px',
                fontWeight: '600',
                cursor: pointerStyle,
                transition: 'var(--transition)',
                whiteSpace: 'nowrap'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Posts list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxHeight: '500px', overflowY: 'auto', paddingRight: '4px' }}>
          {filteredPosts.length === 0 ? (
            <div className="glass-panel" style={{ padding: '40px', textAlign: 'center', color: 'var(--text-secondary)' }}>
              <span>No threads in this category yet. Be the first to start a conversation!</span>
            </div>
          ) : (
            filteredPosts.map(post => (
              <div key={post.id} className="glass-panel slide-in" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                
                {/* Author row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: post.isAnonymous ? 'var(--border-color)' : 'var(--primary-light)', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', color: post.isAnonymous ? 'var(--text-secondary)' : 'var(--primary)' }}>
                    {post.isAnonymous ? <ShieldAlert size={14} /> : <User size={14} />}
                  </div>
                  <div>
                    <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-primary)', display: 'block' }}>{post.author}</span>
                    <span style={{ fontSize: '10px', color: 'var(--text-secondary)' }}>Logged Member</span>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h4 style={{ fontSize: '15px', color: 'var(--text-primary)', fontWeight: '700', marginBottom: '6px' }}>{post.title}</h4>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{post.content}</p>
                </div>

                {/* Action buttons */}
                <div style={{ display: 'flex', gap: '16px', borderTop: '1px solid var(--border-color)', borderBottom: post.replies.length > 0 ? '1px solid var(--border-color)' : 'none', padding: '10px 0', fontSize: '12px' }}>
                  <button 
                    onClick={() => handleToggleLike(post.id)}
                    style={{ border: 'none', background: 'none', cursor: pointerStyle, display: 'flex', alignItems: 'center', gap: '6px', color: post.liked ? 'var(--primary)' : 'var(--text-secondary)', fontWeight: '600' }}
                  >
                    <Heart size={14} fill={post.liked ? 'var(--primary)' : 'none'} /> {post.likes} Likes
                  </button>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-secondary)' }}>
                    <MessageSquare size={14} /> {post.replies.length} Replies
                  </span>
                </div>

                {/* Replies list */}
                {post.replies.length > 0 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingLeft: '12px', borderLeft: '2px solid var(--primary-light)' }}>
                    {post.replies.map((rep, rIdx) => (
                      <div key={rIdx} style={{ background: 'var(--bg-primary)', padding: '10px', borderRadius: '6px', fontSize: '12px' }}>
                        <strong style={{ display: 'block', color: 'var(--secondary)', fontSize: '11px', marginBottom: '2px' }}>{rep.author}</strong>
                        <p style={{ color: 'var(--text-primary)' }}>{rep.text}</p>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            ))
          )}
        </div>

      </div>

      {/* Right Column: Post builder & Community Rules */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        
        {/* Post Builder Form */}
        <div className="glass-panel" style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h3 style={{ fontSize: '18px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>
            💬 Share Your Experience
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Thread Title</span>
            <input 
              type="text" 
              placeholder="e.g. Tips on managing ovulation fatigue..."
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
              style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)', fontSize: '13px' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Post Body</span>
            <textarea
              placeholder="Share details, symptoms, questions or recovery guidelines..."
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)', minHeight: '100px', resize: 'none', fontFamily: 'var(--font-sans)', fontSize: '13px' }}
            />
          </div>

          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'var(--text-primary)', cursor: pointerStyle }}>
            <input 
              type="checkbox" 
              checked={postAnonymous}
              onChange={(e) => setPostAnonymous(e.target.checked)}
              style={{ accentColor: 'var(--primary)' }} 
            />
            Post anonymously (Your identity remains hidden)
          </label>

          <button className="btn btn-primary" style={{ justifyContent: 'center' }} onClick={handleCreatePost}>
            Publish Thread <Plus size={16} />
          </button>
        </div>

        {/* Security Rules */}
        <div className="glass-panel" style={{ padding: '24px', borderLeft: '4px solid var(--secondary)' }}>
          <h4 style={{ fontSize: '14px', color: 'var(--secondary)', marginBottom: '8px' }}>🛡️ Safe Space Intimate Guardrails</h4>
          <ul style={{ listStyleType: 'decimal', paddingLeft: '16px', fontSize: '11px', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '6px', lineHeight: '1.4' }}>
            <li>Explicit biological reviews only; vulgarity or insults trigger immediate bans.</li>
            <li>We recommend posting anonymously for intimate medical questions.</li>
            <li>Zero commercial solicitations or prescription recommendations are allowed.</li>
          </ul>
        </div>

      </div>

    </div>
  );
}

const pointerStyle = 'pointer';
