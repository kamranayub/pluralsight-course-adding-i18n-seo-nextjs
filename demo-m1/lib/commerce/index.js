import { HIDDEN_PRODUCT_TAG } from 'lib/constants';

const mockProductsEn = [
  {
    id: 'product1',
    handle: 'product-1',
    availableForSale: true,
    title: 'Mock Shirt',
    description:
      'This t-shirt features an elegant, minimalist design with smooth, flowing lines that curve gracefully across the fabric. The abstract lines form a dynamic, artistic pattern, adding a modern and stylish touch. Made from high-quality, soft material, this t-shirt is both comfortable and durable, perfect for everyday wear or casual outings. The simple yet eye-catching design makes it versatile, allowing it to pair well with jeans, shorts, or any casual outfit. Available in multiple colors and sizes, this t-shirt is an ideal choice for those looking for a unique and contemporary wardrobe addition.',
    descriptionHtml:
      '<p>This t-shirt features an elegant, minimalist design with smooth, flowing lines that curve gracefully across the fabric. The abstract lines form a dynamic, artistic pattern, adding a modern and stylish touch. Made from high-quality, soft material, this t-shirt is both comfortable and durable, perfect for everyday wear or casual outings. The simple yet eye-catching design makes it versatile, allowing it to pair well with jeans, shorts, or any casual outfit. Available in multiple colors and sizes, this t-shirt is an ideal choice for those looking for a unique and contemporary wardrobe addition.</p>',
    options: [
      {
        id: 'option1',
        name: 'Color',
        values: ['Black', 'White']
      },
      {
        id: 'option2',
        name: 'Size',
        values: ['S', 'M', 'L']
      }
    ],
    priceRange: {
      maxVariantPrice: {
        amount: '100.00',
        currencyCode: 'USD'
      },
      minVariantPrice: {
        amount: '50.00',
        currencyCode: 'USD'
      }
    },
    variants: {
      edges: [
        {
          node: {
            id: 'variant1',
            title: 'Black / S',
            availableForSale: true,
            selectedOptions: [
              { name: 'Color', value: 'Black' },
              { name: 'Size', value: 'S' }
            ],
            price: {
              amount: '100.00',
              currencyCode: 'USD'
            }
          }
        },
        {
          node: {
            id: 'variant2',
            title: 'White / M',
            availableForSale: true,
            selectedOptions: [
              { name: 'Color', value: 'White' },
              { name: 'Size', value: 'M' }
            ],
            price: {
              amount: '50.00',
              currencyCode: 'USD'
            }
          }
        }
      ]
    },
    featuredImage: {
      url: '/images/t-shirt-1.png',
      altText: 'Featured Image',
      width: 3023,
      height: 3000
    },
    images: {
      edges: [
        {
          node: {
            url: '/images/t-shirt-1.png',
            altText: 'Image 1',
            width: 3023,
            height: 3000
          }
        },
        {
          node: {
            url: '/images/t-shirt-2.png',
            altText: 'Image 2',
            width: 3023,
            height: 3000
          }
        }
      ]
    },
    seo: {
      title: null,
      description: null
    },
    tags: ['shirt', 'product', 'tee'],
    updatedAt: '2023-10-01T00:00:00Z'
  },
  {
    id: 'product2',
    handle: 'product-2',
    availableForSale: true,
    title: 'Mock Bag',
    description: 'This backpack features an elegant, minimalist design with smooth, flowing lines that curve gracefully across the fabric. The abstract lines form a dynamic, artistic pattern, adding a modern and stylish touch. Made from high-quality, soft material, this backpack is both comfortable and durable, perfect for everyday wear or casual outings. The simple yet eye-catching design makes it versatile, allowing it to pair well with jeans, shorts, or any casual outfit. Available in multiple colors and sizes, this bag is an ideal choice for those looking for a unique and contemporary wardrobe addition.',
    descriptionHtml: '<p>This backpack features an elegant, minimalist design with smooth, flowing lines that curve gracefully across the fabric. The abstract lines form a dynamic, artistic pattern, adding a modern and stylish touch. Made from high-quality, soft material, this backpack is both comfortable and durable, perfect for everyday wear or casual outings. The simple yet eye-catching design makes it versatile, allowing it to pair well with jeans, shorts, or any casual outfit. Available in multiple colors and sizes, this bag is an ideal choice for those looking for a unique and contemporary wardrobe addition.</p>',
    options: [
      {
        id: 'option1',
        name: 'Color',
        values: ['Black', 'White']
      },
      {
        id: 'option2',
        name: 'Size',
        values: ['6 x 8 inch', '8 x 11 inch']
      }
    ],
    priceRange: {
      maxVariantPrice: {
        amount: '150.00',
        currencyCode: 'USD'
      },
      minVariantPrice: {
        amount: '80.00',
        currencyCode: 'USD'
      }
    },
    variants: {
      edges: [
        {
          node: {
            id: 'variant2-1',
            title: 'Black / 6 x 8 inch',
            availableForSale: true,
            selectedOptions: [
              { name: 'Color', value: 'Black' },
              { name: 'Size', value: '6 x 8 inch' }
            ],
            price: {
              amount: '150.00',
              currencyCode: 'USD'
            }
          }
        }
      ]
    },
    featuredImage: {
      url: '/images/bag-1-dark.png',
      altText: 'Bag Dark',
      width: 3037,
      height: 3000
    },
    images: {
      edges: [
        {
          node: {
            url: '/images/bag-1-dark.png',
            altText: 'Bag Dark',
            width: 3037,
            height: 3000
          }
        },
        {
          node: {
            url: '/images/bag-1-light.png',
            altText: 'Bag Light',
            width: 3037,
            height: 3000
          }
        }
      ]
    },
    seo: {
      title: null,
      description: null
    },
    tags: ['tag3', 'tag4'],
    updatedAt: '2023-10-02T00:00:00Z'
  },
  {
    id: 'product3',
    handle: 'product-3',
    availableForSale: true,
    title: 'Mock Hat',
    description: 'This hat features an elegant, minimalist design.Made from high-quality, soft material, this hat is both comfortable and durable, perfect for everyday wear or casual outings. The simple yet eye-catching design makes it versatile, allowing it to pair well with jeans, shorts, or any casual outfit. Available in multiple colors and sizes, this hat is an ideal choice for those looking for a unique and contemporary wardrobe addition.',
    descriptionHtml: '<p>This hat features an elegant, minimalist design.Made from high-quality, soft material, this hat is both comfortable and durable, perfect for everyday wear or casual outings. The simple yet eye-catching design makes it versatile, allowing it to pair well with jeans, shorts, or any casual outfit. Available in multiple colors and sizes, this hat is an ideal choice for those looking for a unique and contemporary wardrobe addition.</p>',
    options: [
      
    ],
    priceRange: {
      maxVariantPrice: {
        amount: '200.00',
        currencyCode: 'USD'
      },
      minVariantPrice: {
        amount: '100.00',
        currencyCode: 'USD'
      }
    },
    variants: {
      edges: [
        
      ]
    },
    featuredImage: {
      url: '/images/hat-1.png',
      altText: 'Hat Dark',
      width: 1200,
      height: 1200
    },
    images: {
      edges: [
        {
          node: {
            url: '/images/hat-1.png',
            altText: 'Hat Dark',
            width: 1200,
            height: 1200
          }
        },
        {
          node: {
            url: '/images/hat-2.png',
            altText: 'Hat close-up',
            width: 1200,
            height: 1200
          }
        }
      ]
    },
    seo: {
      title: null,
      description: null
    },
    tags: ['tag5', 'tag6'],
    updatedAt: '2023-10-03T00:00:00Z'
  },
  {
    id: 'product4',
    handle: 'product-4',
    availableForSale: true,
    title: 'Mock Hoodie',
    description: 'This hoodie features an elegant, minimalist design. Made from high-quality, soft material, this hoodie is both comfortable and durable, perfect for everyday wear or casual outings. The simple yet eye-catching design makes it versatile, allowing it to pair well with jeans, shorts, or any casual outfit. Available in multiple colors and sizes, this hoodie is an ideal choice for those looking for a unique and contemporary wardrobe addition.',
    descriptionHtml: '<p>This hoodie features an elegant, minimalist design. Made from high-quality, soft material, this hoodie is both comfortable and durable, perfect for everyday wear or casual outings. The simple yet eye-catching design makes it versatile, allowing it to pair well with jeans, shorts, or any casual outfit. Available in multiple colors and sizes, this hoodie is an ideal choice for those looking for a unique and contemporary wardrobe addition.</p>',
    options: [
      {
        id: 'size',
        name: 'Size',
        values: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL']
      }
    ],
    priceRange: {
      maxVariantPrice: {
        amount: '50.00',
        currencyCode: 'USD'
      },
      minVariantPrice: {
        amount: '50.00',
        currencyCode: 'USD'
      }
    },
    variants: {
      edges: [
        {
          node: {
            id: 'variant4-1',
            title: 'XS',
            availableForSale: true,
            selectedOptions: [
              { name: 'Size', value: 'XS' }
            ],
            price: {
              amount: '50.00',
              currencyCode: 'USD'
            }
          }
        },
        {
          node: {
            id: 'variant4-2',
            title: 'M',
            availableForSale: true,
            selectedOptions: [
              { name: 'Size', value: 'M' }
            ],
            price: {
              amount: '50.00',
              currencyCode: 'USD'
            }
          }
        }
      ]
    },
    featuredImage: {
      url: '/images/hoodie-1.png',
      altText: 'Hoodie Dark',
      width: 2000,
      height: 2000
    },
    images: {
      edges: [
        {
          node: {
            url: '/images/hoodie-1.png',
            altText: 'Hoodie Dark',
            width: 2000,
            height: 2000
          }
        },
        {
          node: {
            url: '/images/hoodie-2.png',
            altText: 'Hoodie close-up',
            width: 1919,
            height: 1920
          }
        }
      ]
    },
    seo: {
      title: null,
      description: null
    },
    tags: ['tag5', 'tag6'],
    updatedAt: '2023-10-03T00:00:00Z'
  }
];

const mockProductsFr = [
  {
    id: 'product1',
    handle: 'product-1',
    availableForSale: true,
    title: 'Chemise Mock',
    description:
      'Ce t-shirt présente un design élégant et minimaliste avec des lignes lisses et fluides qui se courbent gracieusement sur le tissu. Les lignes abstraites forment un motif artistique dynamique, ajoutant une touche moderne et stylée. Fabriqué à partir de matériaux de haute qualité et doux, ce t-shirt est à la fois confortable et durable, parfait pour un usage quotidien ou des sorties décontractées. Le design simple mais accrocheur le rend polyvalent, permettant de l\'associer facilement avec des jeans, des shorts ou toute tenue décontractée. Disponible en plusieurs couleurs et tailles, ce t-shirt est un choix idéal pour ceux qui recherchent une addition unique et contemporaine à leur garde-robe.',
    descriptionHtml:
      '<p>Ce t-shirt présente un design élégant et minimaliste avec des lignes lisses et fluides qui se courbent gracieusement sur le tissu. Les lignes abstraites forment un motif artistique dynamique, ajoutant une touche moderne et stylée. Fabriqué à partir de matériaux de haute qualité et doux, ce t-shirt est à la fois confortable et durable, parfait pour un usage quotidien ou des sorties décontractées. Le design simple mais accrocheur le rend polyvalent, permettant de l\'associer facilement avec des jeans, des shorts ou toute tenue décontractée. Disponible en plusieurs couleurs et tailles, ce t-shirt est un choix idéal pour ceux qui recherchent une addition unique et contemporaine à leur garde-robe.</p>',
    options: [
      {
        id: 'option1',
        name: 'Couleur',
        values: ['Noir', 'Blanc']
      },
      {
        id: 'option2',
        name: 'Taille',
        values: ['S', 'M', 'L']
      }
    ],
    priceRange: {
      maxVariantPrice: {
        amount: '100.00',
        currencyCode: 'USD'
      },
      minVariantPrice: {
        amount: '50.00',
        currencyCode: 'USD'
      }
    },
    variants: {
      edges: [
        {
          node: {
            id: 'variant1',
            title: 'Noir / S',
            availableForSale: true,
            selectedOptions: [
              { name: 'Couleur', value: 'Noir' },
              { name: 'Taille', value: 'S' }
            ],
            price: {
              amount: '100.00',
              currencyCode: 'USD'
            }
          }
        },
        {
          node: {
            id: 'variant2',
            title: 'Blanc / M',
            availableForSale: true,
            selectedOptions: [
              { name: 'Couleur', value: 'Blanc' },
              { name: 'Taille', value: 'M' }
            ],
            price: {
              amount: '50.00',
              currencyCode: 'USD'
            }
          }
        }
      ]
    },
    featuredImage: {
      url: '/images/t-shirt-1.png',
      altText: 'Image en vedette',
      width: 3023,
      height: 3000
    },
    images: {
      edges: [
        {
          node: {
            url: '/images/t-shirt-1.png',
            altText: 'Image 1',
            width: 3023,
            height: 3000
          }
        },
        {
          node: {
            url: '/images/t-shirt-2.png',
            altText: 'Image 2',
            width: 3023,
            height: 3000
          }
        }
      ]
    },
    seo: {
      title: null,
      description: null
    },
    tags: ['chemise', 'produit', 'tee'],
    updatedAt: '2023-10-01T00:00:00Z'
  },
  {
    id: 'product2',
    handle: 'product-2',
    availableForSale: true,
    title: 'Sac Mock',
    description: 'Ce sac à dos présente un design élégant et minimaliste avec des lignes lisses et fluides qui se courbent gracieusement sur le tissu. Les lignes abstraites forment un motif artistique dynamique, ajoutant une touche moderne et stylée. Fabriqué à partir de matériaux de haute qualité et doux, ce sac à dos est à la fois confortable et durable, parfait pour un usage quotidien ou des sorties décontractées. Le design simple mais accrocheur le rend polyvalent, permettant de l\'associer facilement avec des jeans, des shorts ou toute tenue décontractée. Disponible en plusieurs couleurs et tailles, ce sac est un choix idéal pour ceux qui recherchent une addition unique et contemporaine à leur garde-robe.',
    descriptionHtml: '<p>Ce sac à dos présente un design élégant et minimaliste avec des lignes lisses et fluides qui se courbent gracieusement sur le tissu. Les lignes abstraites forment un motif artistique dynamique, ajoutant une touche moderne et stylée. Fabriqué à partir de matériaux de haute qualité et doux, ce sac à dos est à la fois confortable et durable, parfait pour un usage quotidien ou des sorties décontractées. Le design simple mais accrocheur le rend polyvalent, permettant de l\'associer facilement avec des jeans, des shorts ou toute tenue décontractée. Disponible en plusieurs couleurs et tailles, ce sac est un choix idéal pour ceux qui recherchent une addition unique et contemporaine à leur garde-robe.</p>',
    options: [
      {
        id: 'option1',
        name: 'Couleur',
        values: ['Noir', 'Blanc']
      },
      {
        id: 'option2',
        name: 'Taille',
        values: ['6 x 8 pouces', '8 x 11 pouces']
      }
    ],
    priceRange: {
      maxVariantPrice: {
        amount: '150.00',
        currencyCode: 'USD'
      },
      minVariantPrice: {
        amount: '80.00',
        currencyCode: 'USD'
      }
    },
    variants: {
      edges: [
        {
          node: {
            id: 'variant2-1',
            title: 'Noir / 6 x 8 pouces',
            availableForSale: true,
            selectedOptions: [
              { name: 'Couleur', value: 'Noir' },
              { name: 'Taille', value: '6 x 8 pouces' }
            ],
            price: {
              amount: '150.00',
              currencyCode: 'USD'
            }
          }
        }
      ]
    },
    featuredImage: {
      url: '/images/bag-1-dark.png',
      altText: 'Sac Sombre',
      width: 3037,
      height: 3000
    },
    images: {
      edges: [
        {
          node: {
            url: '/images/bag-1-dark.png',
            altText: 'Sac Sombre',
            width: 3037,
            height: 3000
          }
        },
        {
          node: {
            url: '/images/bag-1-light.png',
            altText: 'Sac Clair',
            width: 3037,
            height: 3000
          }
        }
      ]
    },
    seo: {
      title: null,
      description: null
    },
    tags: ['tag3', 'tag4'],
    updatedAt: '2023-10-02T00:00:00Z'
  },
  {
    id: 'product3',
    handle: 'product-3',
    availableForSale: true,
    title: 'Chapeau Mock',
    description: 'Ce chapeau présente un design élégant et minimaliste. Fabriqué à partir de matériaux de haute qualité et doux, ce chapeau est à la fois confortable et durable, parfait pour un usage quotidien ou des sorties décontractées. Le design simple mais accrocheur le rend polyvalent, permettant de l\'associer facilement avec des jeans, des shorts ou toute tenue décontractée. Disponible en plusieurs couleurs et tailles, ce chapeau est un choix idéal pour ceux qui recherchent une addition unique et contemporaine à leur garde-robe.',
    descriptionHtml: '<p>Ce chapeau présente un design élégant et minimaliste. Fabriqué à partir de matériaux de haute qualité et doux, ce chapeau est à la fois confortable et durable, parfait pour un usage quotidien ou des sorties décontractées. Le design simple mais accrocheur le rend polyvalent, permettant de l\'associer facilement avec des jeans, des shorts ou toute tenue décontractée. Disponible en plusieurs couleurs et tailles, ce chapeau est un choix idéal pour ceux qui recherchent une addition unique et contemporaine à leur garde-robe.</p>',
    options: [
      
    ],
    priceRange: {
      maxVariantPrice: {
        amount: '200.00',
        currencyCode: 'USD'
      },
      minVariantPrice: {
        amount: '100.00',
        currencyCode: 'USD'
      }
    },
    variants: {
      edges: [
        
      ]
    },
    featuredImage: {
      url: '/images/hat-1.png',
      altText: 'Chapeau Sombre',
      width: 1200,
      height: 1200
    },
    images: {
      edges: [
        {
          node: {
            url: '/images/hat-1.png',
            altText: 'Chapeau Sombre',
            width: 1200,
            height: 1200
          }
        },
        {
          node: {
            url: '/images/hat-2.png',
            altText: 'Chapeau gros plan',
            width: 1200,
            height: 1200
          }
        }
      ]
    },
    seo: {
      title: null,
      description: null
    },
    tags: ['tag5', 'tag6'],
    updatedAt: '2023-10-03T00:00:00Z'
  },
  {
    id: 'product4',
    handle: 'produit-4',
    availableForSale: true,
    title: 'Hoodie Mock',
    description: 'Ce hoodie présente un design élégant et minimaliste. Fabriqué à partir de matériaux de haute qualité et doux, ce hoodie est à la fois confortable et durable, parfait pour un usage quotidien ou des sorties décontractées. Le design simple mais accrocheur le rend polyvalent, permettant de l\'associer facilement avec des jeans, des shorts ou toute tenue décontractée. Disponible en plusieurs couleurs et tailles, ce hoodie est un choix idéal pour ceux qui recherchent une addition unique et contemporaine à leur garde-robe.',
    descriptionHtml: '<p>Ce hoodie présente un design élégant et minimaliste. Fabriqué à partir de matériaux de haute qualité et doux, ce hoodie est à la fois confortable et durable, parfait pour un usage quotidien ou des sorties décontractées. Le design simple mais accrocheur le rend polyvalent, permettant de l\'associer facilement avec des jeans, des shorts ou toute tenue décontractée. Disponible en plusieurs couleurs et tailles, ce hoodie est un choix idéal pour ceux qui recherchent une addition unique et contemporaine à leur garde-robe.</p>',
    options: [
      {
        id: 'taille',
        name: 'Taille',
        values: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL']
      }
    ],
    priceRange: {
      maxVariantPrice: {
        amount: '50.00',
        currencyCode: 'USD'
      },
      minVariantPrice: {
        amount: '50.00',
        currencyCode: 'USD'
      }
    },
    variants: {
      edges: [
        {
          node: {
            id: 'variant4-1',
            title: 'XS',
            availableForSale: true,
            selectedOptions: [
              { name: 'Taille', value: 'XS' }
            ],
            price: {
              amount: '50.00',
              currencyCode: 'USD'
            }
          }
        },
        {
          node: {
            id: 'variant4-2',
            title: 'M',
            availableForSale: true,
            selectedOptions: [
              { name: 'Taille', value: 'M' }
            ],
            price: {
              amount: '50.00',
              currencyCode: 'USD'
            }
          }
        }
      ]
    },
    featuredImage: {
      url: '/images/hoodie-1.png',
      altText: 'Hoodie Sombre',
      width: 2000,
      height: 2000
    },
    images: {
      edges: [
        {
          node: {
            url: '/images/hoodie-1.png',
            altText: 'Hoodie Sombre',
            width: 2000,
            height: 2000
          }
        },
        {
          node: {
            url: '/images/hoodie-2.png',
            altText: 'Hoodie gros plan',
            width: 1919,
            height: 1920
          }
        }
      ]
    },
    seo: {
      title: null,
      description: null
    },
    tags: ['tag5', 'tag6'],
    updatedAt: '2023-10-03T00:00:00Z'
  }
];

export async function getCart(cartId, locale) {
  const mockProducts = locale === 'fr' ? mockProductsFr : mockProductsEn;
  const mockCart = {
    id: 'cart123',
    checkoutUrl: 'https://example.com/checkout',
    cost: {
      subtotalAmount: {
        amount: '150.00',
        currencyCode: 'USD'
      },
      totalAmount: {
        amount: '165.00',
        currencyCode: 'USD'
      },
      totalTaxAmount: {
        amount: '15.00',
        currencyCode: 'USD'
      }
    },
    lines: [
      {
        id: 'item1',
        quantity: 2,
        cost: {
          totalAmount: {
            amount: '100.00',
            currencyCode: 'USD'
          }
        },
        merchandise: {
          id: 'variant1',
          title: `${mockProducts[0].title} - ${mockProducts[0].variants.edges[0].node.title}`,
          selectedOptions: mockProducts[0].variants.edges[0].node.selectedOptions,
          product: {
            id: 'product1',
            handle: 'product-1',
            title: mockProducts[0].title,
            featuredImage: {
              url: '/images/t-shirt-1.png',
              altText: mockProducts[0].title,
              width: 3023,
              height: 3000
            }
          }
        }
      },
      {
        id: 'item2',
        quantity: 1,
        cost: {
          totalAmount: {
            amount: '50.00',
            currencyCode: 'USD'
          }
        },
        merchandise: {
          id: 'variant2',
          title: `${mockProducts[1].title} - ${mockProducts[1].variants.edges[0].node.title}`,
          selectedOptions: mockProducts[1].variants.edges[0].node.selectedOptions,
          product: {
            id: 'product2',
            handle: 'product-2',
            title: mockProducts[1].title,
            featuredImage: {
              url: '/images/bag-1-dark.png',
              altText: mockProducts[1].title,
              width: 3037,
              height: 3000
            }
          }
        }
      }
    ],
    totalQuantity: 3
  };

  return mockCart;
}

export function addToCart(cartId, lineItems) {
  return Promise.resolve({});
}

export function createCart() {
  return Promise.resolve({ id: 'cart123' });
}

export function removeFromCart(cartId, lineItems) {
  return Promise.resolve({});
}

export function updateCart(cartId, lineItems) {
  return Promise.resolve({});
}

export function getMenu(menuId) {
  return Promise.resolve([]);
}

export async function getProduct(productHandle, locale) {
  const mockProducts = locale === 'fr' ? mockProductsFr : mockProductsEn;
  return mockProducts.map(p => reshapeProduct(p)).find((p) => p.handle === productHandle) || reshapeProduct(mockProducts[0]);
}

export async function getProductRecommendations(productId, locale) {
  const mockProducts = locale === 'fr' ? mockProductsFr : mockProductsEn;
  return mockProducts.filter((p) => p.id !== productId);
}

export async function getProductReviews(productId, locale) {
  const en = [
    {
      id: 'review1',
      author: 'user123',
      title: 'Great product!',
      rating: 5,
      body: 'I love this product! It fits perfectly and looks great.',
    },
    {
      id: 'review2',
      author: 'user789',
      title: 'Didn\'t like it',
      rating: 3,
      body: 'The product was okay, but it didn\'t meet my expectations.',
    }
  ];

  const fr = [
    {
      id: 'review1',
      author: 'user123',
      title: 'Super produit!',
      rating: 5,
      body: 'J\'adore ce produit! Il me va parfaitement et a l\'air super.',
    },
    {
      id: 'review2',
      author: 'user789',
      title: 'Je n\'ai pas aimé',
      rating: 3,
      body: 'Le produit était correct, mais il n\'a pas répondu à mes attentes.',
    }
  ];

  return locale === 'fr' ? fr : en;
}

const translateProduct = (product, locale) => {
  if (!product) {
    return undefined;
  }

  const { title, description, ...rest } = product;

  return {
    ...rest,
    title: title + ' ' + locale,
    description: description + ' ' + locale
  };
}

const reshapeProduct = (product, filterHiddenProducts = true, locale = 'en') => {
  if (!product || (filterHiddenProducts && product.tags.includes(HIDDEN_PRODUCT_TAG))) {
    return undefined;
  }

  const { images, variants, ...rest } = product;

  return {
    ...rest,
    images: reshapeImages(images, product.title),
    variants: removeEdgesAndNodes(variants)
  };
};

const reshapeImages = (images, productTitle) => {
  const flattened = removeEdgesAndNodes(images);

  return flattened.map((image) => {
    const filename = image.url.match(/.*\/(.*)\..*/)?.[1];
    return {
      ...image,
      altText: image.altText || `${productTitle} - ${filename}`
    };
  });
};

const removeEdgesAndNodes = (array) => {
  return array.edges.map((edge) => edge?.node);
};
