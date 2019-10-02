const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl: 'https://i.ibb.co/s3QS7PQ/fall-hats-gq-style-0816-01.jpg',
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/xX3RVps/2017-06-23-07-38-21-900x596.jpg',
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/BPGpHgp/maxresdefault.jpg',
      id: 3,
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'womens',
      imageUrl: 'https://i.ibb.co/NLtqpJM/hinh-anh-hinh-nen-ca-si-bich-phuong-dep-de-thuong-nhat9.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R0QvGVN/khong-the-roi-mat-truoc-hinh-anh-ve-si-cuc-ngau-cua-son-tung-m-tp-1247283.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
