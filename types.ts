export type MediaType = 'image' | 'video';

export interface ActiveDevice {
  id: string;
  deviceName: string;
  deviceType: 'iPhone' | 'Android' | 'MacBook' | 'Windows' | 'iPad';
  location: string;
  ipAddress: string;
  lastActive: string;
  isCurrent: boolean;
}

export interface InstagramConnection {
  username: string;
  fullName: string;
  profilePic: string;
  connectedAt: string;
  reelsCount: number;
  followersCount: string;
  verified: boolean;
}

export interface UserAccount {
  id: string;
  name: string;
  username: string; // unique
  emailOrPhone: string;
  password?: string;
  avatar: string;
  bio: string;
  website?: string;
  gender?: string;
  category?: string;
  isPrivate: boolean;
  isVerified: boolean;
  postsCount: number;
  videosCount: number;
  followersCount: number;
  followingCount: number;
  joinedDate: string;
  activeDevices: ActiveDevice[];
  instagramConnected: InstagramConnection | null;
  blockedUserIds: string[];
  savedPostIds: string[];
  followingUserIds: string[];
}

export interface CommentItem {
  id: string;
  userId: string;
  userName: string;
  userUsername: string;
  userAvatar: string;
  isVerified?: boolean;
  text: string;
  timestamp: string;
  likesCount: number;
  isLiked?: boolean;
  replies?: CommentItem[];
}

export interface PostItem {
  id: string;
  userId: string;
  user: {
    name: string;
    username: string;
    avatar: string;
    isVerified: boolean;
  };
  mediaType: MediaType;
  mediaUrls: string[];
  caption: string;
  location?: string;
  likesCount: number;
  isLiked: boolean;
  comments: CommentItem[];
  timestamp: string;
  isSaved: boolean;
  tags?: string[];
  viewsCount?: number;
}

export interface ReelItem {
  id: string;
  title: string;
  caption: string;
  videoUrl: string;
  posterUrl: string;
  user: {
    name: string;
    username: string;
    avatar: string;
    isVerified: boolean;
  };
  likesCount: number;
  commentsCount: number;
  sharesCount: number;
  isLiked: boolean;
  isSaved?: boolean;
  musicTitle: string;
  musicAuthor?: string;
  source: 'instagram' | 'ourwealth';
  instagramAuthor?: string;
  isInstagramExclusive?: boolean;
  timestamp: string;
}

export interface StoryItem {
  id: string;
  userId: string;
  user: {
    name: string;
    username: string;
    avatar: string;
    isVerified?: boolean;
  };
  mediaUrl: string;
  mediaType: MediaType;
  caption?: string;
  timestamp: string;
  hasSeen: boolean;
}

export interface DirectMessage {
  id: string;
  senderId: string;
  receiverId: string;
  text?: string;
  mediaUrl?: string;
  mediaType?: 'image' | 'video' | 'audio' | 'voice' | 'reel';
  audioDuration?: string;
  reelData?: {
    id: string;
    title: string;
    videoUrl: string;
    posterUrl: string;
    source: 'instagram' | 'ourwealth';
    author: string;
    isInstagramExclusive?: boolean;
  };
  timestamp: string;
  status: 'sent' | 'delivered' | 'seen';
  reaction?: string;
}

export type ChatTheme = 'emerald' | 'royal-dark' | 'champagne' | 'midnight' | 'amethyst' | 'graphite';

export interface ChatConversation {
  id: string;
  type: 'direct' | 'community';
  participantIds: string[];
  otherUser?: UserAccount;
  groupName?: string;
  groupAvatar?: string;
  groupDescription?: string;
  memberCount?: number;
  lastMessage?: DirectMessage;
  unreadCount: number;
  isTyping?: boolean;
  theme: ChatTheme;
  createdAt: string;
}

export type ActiveTab = 'feed' | 'reels' | 'messages' | 'explore' | 'profile' | 'community';
