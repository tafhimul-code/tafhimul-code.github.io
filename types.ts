export type AppLanguage = 'bn' | 'en';

export interface LoggedInDevice {
  id: string;
  deviceName: string;
  platform: string;
  location: string;
  ipAddress: string;
  lastActive: string;
  isCurrent: boolean;
}

export interface StoryHighlight {
  id: string;
  title: string;
  cover: string;
}

export interface UserProfile {
  id: string;
  username: string;
  fullName: string;
  emailOrPhone?: string;
  password?: string;
  avatar: string;
  banner?: string;
  bio: string;
  location?: string;
  website?: string;
  isVerified: boolean;
  followersCount: number;
  followingCount: number;
  postsCount: number;
  reelsCount?: number;
  isPrivateAccount?: boolean;
  isFollowing?: boolean;
  instagramHandle?: string;
  isInstagramConnected: boolean;
  instagramFollowers?: string;
  onlineStatus?: 'online' | 'offline' | 'away';
  lastSeen?: string;
  highlights?: StoryHighlight[];
  registeredDevices?: LoggedInDevice[];
  joinDate?: string;
  chatTheme?: string;
}

export interface StoryItem {
  id: string;
  userId: string;
  user: {
    username: string;
    avatar: string;
    isVerified?: boolean;
  };
  mediaUrl: string;
  mediaType: 'image' | 'video';
  timestamp: string;
  caption?: string;
  hasSeen?: boolean;
}

export interface Comment {
  id: string;
  userId: string;
  username: string;
  userAvatar: string;
  isVerified?: boolean;
  text: string;
  timestamp: string;
  likes: number;
  isLiked?: boolean;
}

export interface Post {
  id: string;
  userId: string;
  author: {
    username: string;
    fullName: string;
    avatar: string;
    isVerified: boolean;
    instagramHandle?: string;
  };
  mediaType: 'image' | 'video';
  mediaUrls: string[];
  caption: string;
  tags: string[];
  location?: string;
  audioTrack?: string;
  likesCount: number;
  commentsCount: number;
  sharesCount: number;
  isLiked: boolean;
  isSaved: boolean;
  isInstagramCrossPosted?: boolean;
  createdAt: string;
  comments?: Comment[];
}

export interface Reel {
  id: string;
  userId: string;
  author: {
    username: string;
    fullName: string;
    avatar: string;
    isVerified: boolean;
    instagramHandle?: string;
  };
  videoUrl: string;
  thumbnailUrl?: string;
  caption: string;
  tags: string[];
  audioTitle: string;
  audioArtist: string;
  likesCount: number;
  commentsCount: number;
  sharesCount: number;
  isLiked: boolean;
  isSaved: boolean;
  createdAt: string;
  viewsCount: number;
  comments?: Comment[];
  isInstagramSync?: boolean;
}

export interface ChatTheme {
  id: string;
  name: string;
  nameBn: string;
  previewGradient: string;
  bubbleMe: string;
  bubblePartner: string;
  borderTint: string;
  bgTint: string;
}

export interface ChatMessage {
  id: string;
  senderId: string;
  recipientId: string; // or conversationId
  text?: string;
  mediaUrl?: string;
  mediaType?: 'image' | 'video' | 'voice' | 'reel_share' | 'post_share';
  voiceDuration?: number; // in seconds
  replyTo?: {
    id: string;
    senderName: string;
    text?: string;
    mediaType?: string;
  };
  sharedReel?: {
    id: string;
    thumbnailUrl: string;
    caption: string;
    authorUsername: string;
    videoUrl?: string;
    isInstagramSync?: boolean;
    audioTitle?: string;
  };
  sharedPost?: {
    id: string;
    mediaUrl: string;
    caption: string;
    authorUsername: string;
  };
  timestamp: string;
  status: 'sent' | 'delivered' | 'read';
  seenAt?: string;
  reactions?: { [emoji: string]: string[] }; // emoji -> userIds
  isVanish?: boolean;
}

export interface Conversation {
  id: string;
  isGroup: boolean;
  name?: string;
  groupAvatar?: string;
  participants: UserProfile[];
  lastMessage?: ChatMessage;
  unreadCount: number;
  isInstagramThread?: boolean;
  isMessageRequest?: boolean;
  isBlocked?: boolean;
  isVanishMode?: boolean;
  chatTheme?: string;
  updatedAt: string;
}

export interface HangoutRoom {
  id: string;
  title: string;
  topic: string;
  host: UserProfile;
  participantsCount: number;
  activeSpeakers: UserProfile[];
  listeners: UserProfile[];
  isLive: boolean;
  roomType: 'vip_lounge' | 'supercar_club' | 'investor_hub' | 'adda_chill';
}

export interface NotificationItem {
  id: string;
  type: 'like' | 'comment' | 'follow' | 'mention';
  fromUser: {
    id: string;
    username: string;
    fullName: string;
    avatar: string;
    isVerified?: boolean;
  };
  text: string;
  timestamp: string;
  postThumbnail?: string;
  isRead?: boolean;
}

export type TabType = 'feed' | 'explore' | 'reels' | 'messages' | 'hangout' | 'profile';

