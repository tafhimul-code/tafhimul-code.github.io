import { UserAccount, PostItem, ReelItem, StoryItem, ChatConversation, DirectMessage } from '../types';

export const INITIAL_ACCOUNTS: UserAccount[] = [
  {
    id: 'user-royal-1',
    name: 'Aayan Al-Mansoor',
    username: 'aayan.royal',
    emailOrPhone: 'aayan@ourwealth.luxury',
    password: 'password123',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    bio: '⚜️ Archduke of Haute Horlogerie & Private Aviation.\n👑 Curating timeless luxury at @OurWealth.\n📍 Dubai | London | Monaco',
    website: 'https://ourwealth.luxury/aayan',
    gender: 'Male',
    category: 'Luxury Lifestyle',
    isPrivate: false,
    isVerified: true, // Has 20+ posts and 10+ videos
    postsCount: 28,
    videosCount: 14,
    followersCount: 148200,
    followingCount: 340,
    joinedDate: 'January 2024',
    activeDevices: [
      {
        id: 'dev-1',
        deviceName: 'iPhone 16 Pro Max',
        deviceType: 'iPhone',
        location: 'Dubai, UAE',
        ipAddress: '194.168.22.45',
        lastActive: 'Active Now',
        isCurrent: true,
      },
      {
        id: 'dev-2',
        deviceName: 'MacBook Pro 16" M3 Max',
        deviceType: 'MacBook',
        location: 'London, UK',
        ipAddress: '82.165.197.1',
        lastActive: '2 hours ago',
        isCurrent: false,
      }
    ],
    instagramConnected: {
      username: 'aayan_almansoor',
      fullName: 'Aayan Al-Mansoor',
      profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
      connectedAt: '2024-05-12',
      reelsCount: 42,
      followersCount: '254K',
      verified: true,
    },
    blockedUserIds: [],
    savedPostIds: ['post-2', 'post-3'],
    followingUserIds: ['user-royal-2', 'user-royal-3', 'user-royal-4']
  },
  {
    id: 'user-royal-2',
    name: 'Zara De Silva',
    username: 'zara.desilva',
    emailOrPhone: 'zara@ourwealth.luxury',
    password: 'password123',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80',
    bio: '✨ High Jewelry Collector & Superyacht Architect.\n🕊️ Art of Elegance & Heritage.\n💎 Geneva • Paris • Milan',
    website: 'https://zara-desilva.com',
    gender: 'Female',
    category: 'Jewelry & Architecture',
    isPrivate: false,
    isVerified: true,
    postsCount: 34,
    videosCount: 16,
    followersCount: 289000,
    followingCount: 210,
    joinedDate: 'March 2024',
    activeDevices: [
      {
        id: 'dev-3',
        deviceName: 'iPhone 15 Pro',
        deviceType: 'iPhone',
        location: 'Geneva, Switzerland',
        ipAddress: '178.62.204.18',
        lastActive: '10 min ago',
        isCurrent: false,
      }
    ],
    instagramConnected: {
      username: 'zaradesilva_official',
      fullName: 'Zara De Silva',
      profilePic: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80',
      connectedAt: '2024-06-18',
      reelsCount: 38,
      followersCount: '412K',
      verified: true,
    },
    blockedUserIds: [],
    savedPostIds: [],
    followingUserIds: ['user-royal-1']
  },
  {
    id: 'user-royal-3',
    name: 'Rahim Chowdhury',
    username: 'rahim.classic',
    emailOrPhone: 'rahim@wealth.bd',
    password: 'password123',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    bio: '🏎️ Classic Automobili & Supercar Concours d’Elegance.\n🇧🇩 Proud Royal Member of Our Wealth.\n🥂 High Living & Heritage Assets.',
    website: 'https://rahimclassic.io',
    gender: 'Male',
    category: 'Supercars & Assets',
    isPrivate: false,
    isVerified: true,
    postsCount: 22,
    videosCount: 11,
    followersCount: 95400,
    followingCount: 180,
    joinedDate: 'February 2024',
    activeDevices: [],
    instagramConnected: null,
    blockedUserIds: [],
    savedPostIds: [],
    followingUserIds: ['user-royal-1', 'user-royal-2']
  }
];

export const INITIAL_STORIES: StoryItem[] = [
  {
    id: 'story-1',
    userId: 'user-royal-1',
    user: {
      name: 'Aayan Al-Mansoor',
      username: 'aayan.royal',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
      isVerified: true
    },
    mediaUrl: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1000&auto=format&fit=crop&q=80',
    mediaType: 'image',
    caption: 'Tokyo Skyline at Twilight 🌆',
    timestamp: '2 hours ago',
    hasSeen: false
  },
  {
    id: 'story-2',
    userId: 'user-royal-2',
    user: {
      name: 'Zara De Silva',
      username: 'zara.desilva',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80',
      isVerified: true
    },
    mediaUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1000&auto=format&fit=crop&q=80',
    mediaType: 'image',
    caption: 'Private Diamond Showcase in Zurich 💎✨',
    timestamp: '4 hours ago',
    hasSeen: false
  },
  {
    id: 'story-3',
    userId: 'user-royal-3',
    user: {
      name: 'Rahim Chowdhury',
      username: 'rahim.classic',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
      isVerified: true
    },
    mediaUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1000&auto=format&fit=crop&q=80',
    mediaType: 'image',
    caption: 'Track day with the Porsche GT3 RS 🔥',
    timestamp: '5 hours ago',
    hasSeen: false
  }
];

export const INITIAL_POSTS: PostItem[] = [
  {
    id: 'post-1',
    userId: 'user-royal-1',
    user: {
      name: 'Aayan Al-Mansoor',
      username: 'aayan.royal',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
      isVerified: true
    },
    mediaType: 'image',
    mediaUrls: [
      'https://images.unsplash.com/photo-1563720223185-11003d516935?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&auto=format&fit=crop&q=80'
    ],
    caption: 'The art of private villa architecture on the shores of Lake Como. True wealth is peace of mind, heritage, and timeless design. 🏛️✨ #OurWealth #RoyalVibe #LakeComo #Heritage',
    location: 'Villa Balbianello, Lake Como, Italy',
    likesCount: 1420,
    isLiked: false,
    comments: [
      {
        id: 'c1',
        userId: 'user-royal-2',
        userName: 'Zara De Silva',
        userUsername: 'zara.desilva',
        userAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80',
        isVerified: true,
        text: 'Breathtaking craftsmanship Aayan! The symmetry is simply royal ⚜️',
        timestamp: '1h ago',
        likesCount: 42
      },
      {
        id: 'c2',
        userId: 'user-royal-3',
        userName: 'Rahim Chowdhury',
        userUsername: 'rahim.classic',
        userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
        isVerified: true,
        text: 'ক্লাসিক রাজকীয় সৌন্দর্য্য! অসাধারণ ফ্রেম ভাই 🇧🇩👑',
        timestamp: '45m ago',
        likesCount: 18
      }
    ],
    timestamp: '3 hours ago',
    isSaved: false,
    tags: ['OurWealth', 'Luxury', 'Italy', 'Architecture'],
    viewsCount: 9400
  },
  {
    id: 'post-2',
    userId: 'user-royal-2',
    user: {
      name: 'Zara De Silva',
      username: 'zara.desilva',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80',
      isVerified: true
    },
    mediaType: 'image',
    mediaUrls: [
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1200&auto=format&fit=crop&q=80'
    ],
    caption: 'Unveiling the Sovereign Emerald Tourbillon in Paris tonight. Handcrafted by master artisans with 480 emerald-cut diamonds. 💎👑 #HauteHorlogerie #HighJewelry #ParisHauteCouture',
    location: 'Place Vendôme, Paris, France',
    likesCount: 3890,
    isLiked: true,
    comments: [
      {
        id: 'c3',
        userId: 'user-royal-1',
        userName: 'Aayan Al-Mansoor',
        userUsername: 'aayan.royal',
        userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
        isVerified: true,
        text: 'A masterpiece beyond time. Exemplary elegance!',
        timestamp: '2h ago',
        likesCount: 56
      }
    ],
    timestamp: '6 hours ago',
    isSaved: true,
    tags: ['Jewelry', 'Paris', 'Tourbillon'],
    viewsCount: 18200
  },
  {
    id: 'post-3',
    userId: 'user-royal-3',
    user: {
      name: 'Rahim Chowdhury',
      username: 'rahim.classic',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
      isVerified: true
    },
    mediaType: 'image',
    mediaUrls: [
      'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?w=1200&auto=format&fit=crop&q=80'
    ],
    caption: 'Night drive through Dubai Marina. Royal vibes, precision engineering, and infinite dreams. 🏎️💨 #Supercars #OurWealth #DubaiMarina #PureLuxury',
    location: 'Dubai Marina, UAE',
    likesCount: 2150,
    isLiked: false,
    comments: [],
    timestamp: '10 hours ago',
    isSaved: false,
    tags: ['Dubai', 'Supercars'],
    viewsCount: 12100
  }
];

export const INITIAL_REELS: ReelItem[] = [
  {
    id: 'reel-ig-1',
    title: 'Superyacht Sunset in Amalfi Coast',
    caption: 'Cruising the Italian Riviera at golden hour. 🛥️✨ Synchronized from connected Instagram account @aayan_almansoor',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d17?w=800&auto=format&fit=crop&q=80',
    user: {
      name: 'Aayan Al-Mansoor',
      username: 'aayan.royal',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
      isVerified: true
    },
    likesCount: 18400,
    commentsCount: 382,
    sharesCount: 1290,
    isLiked: false,
    musicTitle: 'Ludovico Einaudi • Nuvole Bianche (Orchestral)',
    musicAuthor: 'Ludovico Einaudi',
    source: 'instagram',
    instagramAuthor: 'aayan_almansoor',
    isInstagramExclusive: true,
    timestamp: '1 day ago'
  },
  {
    id: 'reel-ig-2',
    title: 'Private Jet Flight to St. Moritz',
    caption: 'Winter retreat flight over Swiss Alps 🏔️❄️ Synced from Instagram #AlpineLuxury #PrivateAviation',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&auto=format&fit=crop&q=80',
    user: {
      name: 'Zara De Silva',
      username: 'zara.desilva',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80',
      isVerified: true
    },
    likesCount: 29500,
    commentsCount: 512,
    sharesCount: 2310,
    isLiked: true,
    musicTitle: 'Hans Zimmer • Time (Cinematic Symphony)',
    musicAuthor: 'Hans Zimmer',
    source: 'instagram',
    instagramAuthor: 'zaradesilva_official',
    isInstagramExclusive: true,
    timestamp: '2 days ago'
  },
  {
    id: 'reel-ow-3',
    title: 'Vintage Hypercar Concours in Monaco',
    caption: 'Classic royal automotive craftsmanship on display at Casino Square. 🏎️🇲🇨 #OurWealthExclusive #Monaco',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=80',
    user: {
      name: 'Rahim Chowdhury',
      username: 'rahim.classic',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
      isVerified: true
    },
    likesCount: 12300,
    commentsCount: 240,
    sharesCount: 890,
    isLiked: false,
    musicTitle: 'Vivaldi • Winter (Royal Philharmonic)',
    musicAuthor: 'Royal Philharmonic',
    source: 'ourwealth',
    isInstagramExclusive: false,
    timestamp: '3 days ago'
  }
];

export const INITIAL_COMMUNITY_ROOMS: ChatConversation[] = [
  {
    id: 'comm-1',
    type: 'community',
    participantIds: ['user-royal-1', 'user-royal-2', 'user-royal-3'],
    groupName: '👑 Royal Wealth VIP Circle',
    groupAvatar: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&auto=format&fit=crop&q=80',
    groupDescription: 'Exclusive discussion lounge for Our Wealth verified founders, collectors, and royal ambassadors.',
    memberCount: 420,
    unreadCount: 2,
    theme: 'emerald',
    createdAt: '2024-01-01',
    lastMessage: {
      id: 'm-comm-1',
      senderId: 'user-royal-2',
      receiverId: 'comm-1',
      text: 'Welcome everyone! Today’s private discussion topic is luxury heritage preservation. 💎✨',
      timestamp: '10:45 AM',
      status: 'seen'
    }
  },
  {
    id: 'comm-2',
    type: 'community',
    participantIds: ['user-royal-1', 'user-royal-3'],
    groupName: '🏎️ Supercar & Yacht Syndicate',
    groupAvatar: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&auto=format&fit=crop&q=80',
    groupDescription: 'Hypercar telemetry, classic rallies, and yacht charter rendezvous.',
    memberCount: 185,
    unreadCount: 0,
    theme: 'midnight',
    createdAt: '2024-02-15',
    lastMessage: {
      id: 'm-comm-2',
      senderId: 'user-royal-3',
      receiverId: 'comm-2',
      text: 'Anyone attending the Monaco Grand Prix paddock next month? 🏁',
      timestamp: 'Yesterday',
      status: 'seen'
    }
  },
  {
    id: 'comm-3',
    type: 'community',
    participantIds: ['user-royal-1', 'user-royal-2'],
    groupName: '🇧🇩 Bangladesh Prestige Club',
    groupAvatar: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?w=400&auto=format&fit=crop&q=80',
    groupDescription: 'বাংলার রয়াল মেম্বারদের আড্ডা ও আইডিয়া শেয়ারিং হাব।',
    memberCount: 94,
    unreadCount: 1,
    theme: 'champagne',
    createdAt: '2024-03-01',
    lastMessage: {
      id: 'm-comm-3',
      senderId: 'user-royal-3',
      receiverId: 'comm-3',
      text: 'সবাইকে স্বাগতম আওয়ার ওয়েলথ কমিউনিটিতে! আসুন আড্ডা জমাই। 👑',
      timestamp: '8:30 AM',
      status: 'delivered'
    }
  }
];

export const INITIAL_MESSAGES: Record<string, DirectMessage[]> = {
  'user-royal-1': [
    {
      id: 'm-1',
      senderId: 'user-royal-1',
      receiverId: 'current-user',
      text: 'Assalamu Alaikum! Welcome to Our Wealth. It is an honor to have you in our royal network.',
      timestamp: '09:15 AM',
      status: 'seen'
    },
    {
      id: 'm-2',
      senderId: 'user-royal-1',
      receiverId: 'current-user',
      mediaType: 'voice',
      audioDuration: '0:14',
      text: '🎙️ Voice note from Aayan Al-Mansoor',
      timestamp: '09:16 AM',
      status: 'seen'
    },
    {
      id: 'm-3',
      senderId: 'user-royal-1',
      receiverId: 'current-user',
      mediaType: 'reel',
      text: 'Check out this sunset reel from Amalfi Coast!',
      reelData: {
        id: 'reel-ig-1',
        title: 'Superyacht Sunset in Amalfi Coast',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        posterUrl: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d17?w=800&auto=format&fit=crop&q=80',
        source: 'instagram',
        author: 'aayan_almansoor',
        isInstagramExclusive: true
      },
      timestamp: '09:20 AM',
      status: 'delivered'
    }
  ],
  'user-royal-2': [
    {
      id: 'm-4',
      senderId: 'user-royal-2',
      receiverId: 'current-user',
      text: 'Hello! I loved your recent interest in our Geneva High Jewelry presentation. 💎✨',
      timestamp: 'Yesterday',
      status: 'seen'
    },
    {
      id: 'm-5',
      senderId: 'user-royal-2',
      receiverId: 'current-user',
      mediaType: 'image',
      mediaUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&auto=format&fit=crop&q=80',
      text: 'Exclusive sketch of the Emerald Tourbillon.',
      timestamp: 'Yesterday',
      status: 'seen'
    }
  ],
  'user-royal-3': [
    {
      id: 'm-6',
      senderId: 'user-royal-3',
      receiverId: 'current-user',
      text: 'কেমন আছেন ভাই? আওয়ার ওয়েলথ এ নতুন পোস্ট আপলোড করলেন নাকি? ২০+ পোস্ট আর ১০+ ভিডিও হলেই ব্লু ভেরিফাইড ব্যাজ পেয়ে যাবেন! 🇧🇩🔥',
      timestamp: '11:00 AM',
      status: 'delivered'
    }
  ]
};
