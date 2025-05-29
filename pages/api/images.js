// 后端API - 返回图片数据
export default function handler(req, res) {
  const images = [
    {
      id: 1,
      title: '美女图片 1',
      url: '/images/image1.jpg',
      description: '美丽的自然风景'
    },
    {
      id: 2,
      title: '美女图片 2',
      url: '/images/image2.jpg',
      description: '城市夜景'
    },
    {
      id: 3,
      title: '美女图片 3',
      url: '/images/image3.jpg',
      description: '山水风光'
    }
  ];
  
  res.status(200).json(images);
} 