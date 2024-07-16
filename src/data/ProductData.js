const items = [
    {
        id: 1,
        name: 'Floor Model - Scott Living Mattress',
        imageSrc:
            'https://www.mattressfirm.com/_next/image?url=https%3A%2F%2Fimages-us-prod.cms.commerce.dynamics.com%2Fcms%2Fapi%2Fcncgmclkfv%2FimageFileData%2Fsearch%3FfileName%3D%2FProducts%2F143946P%2520%255E%2520%2520%255E%2520Queen%2520%255E%2520%2520%255E%2520Prime_000_001.png%26fallback%3D%2FProducts%2F143946P_000_001.png',
        price: 99,
        description:
            'Energy efficient refrigerator with power rating of 3 stars',
        link: '#',
        category: 1,
    },
    {
        id: 2,
        name: 'Sealy Posturepedic® High Plush Mattress',
        imageSrc:
            'https://www.mattressfirm.com/_next/image?url=https%3A%2F%2Fimages-us-prod.cms.dynamics365commerce.ms%2Fcms%2Fapi%2Fcncgmclkfv%2FimageFileData%2Fsearch%3FfileName%3D%2FProducts%2F143959P%2520%255E%2520%2520%255E%2520Queen%2520%255E%2520%2520%255E%2520Prime_000_001.png%26fallback%3D%2FProducts%2F143959P_000_001.png',
        price: 299,
        description: 'Comfortable and durable',
        link: '#',
        category: 3,
    },
    {
        id: 3,
        name: "Sleepy's By Sealy Memory Foam",
        imageSrc:
            'https://www.americanmattress.com/cdn/shop/files/BeautyrestHarmonyFremont13_Mattresscroppedroomshot_1400x.png',
        price: 199,
        description: 'Best for back support',
        link: '#',
        category: 2,
    },
    {
        id: 4,
        name: "Sleepy's Medium Euro Top Mattress",
        imageSrc:
            'https://www.mattressfirm.com/_next/image?url=https%3A%2F%2Fimages-us-prod.cms.commerce.dynamics.com%2Fcms%2Fapi%2Fcncgmclkfv%2FimageFileData%2Fsearch%3FfileName%3D%2FProducts%2F144077P%2520%255E%2520%2520%255E%2520Queen%2520%255E%2520%2520%255E%2520Prime_000_001.png%26fallback%3D%2FProducts%2F144077P_000_001.png',
        price: 199,
        description: 'Imported luxury mattress',
        link: '#',
        category: 4,
    },
    {
        id: 5,
        name: 'Mattress 5',
        imageSrc:
            'https://www.mattressfirm.com/_next/image?url=https%3A%2F%2Fimages-us-prod.cms.dynamics365commerce.ms%2Fcms%2Fapi%2Fcncgmclkfv%2FimageFileData%2Fsearch%3FfileName%3D%2FProducts%2F143959P%2520%255E%2520%2520%255E%2520Queen%2520%255E%2520%2520%255E%2520Prime_000_001.png%26fallback%3D%2FProducts%2F143959P_000_001.png',
        price: 480,
        description: 'Affordable and comfortable',
        link: '#',
        category: 1,
    },
    {
        id: 6,
        name: 'Mattress 6',
        imageSrc:
            'https://www.mattressfirm.com/_next/image?url=https%3A%2F%2Fimages-us-prod.cms.commerce.dynamics.com%2Fcms%2Fapi%2Fcncgmclkfv%2FimageFileData%2Fsearch%3FfileName%3D%2FProducts%2F144077P%2520%255E%2520%2520%255E%2520Queen%2520%255E%2520%2520%255E%2520Prime_000_001.png%26fallback%3D%2FProducts%2F144077P_000_001.png',
        price: 330,
        description:
            'Eco-friendly materials Eco-friendly materialsEco-friendly materials',
        link: '#',
        category: 3,
    },
    {
        id: 7,
        name: 'Mattress 7',
        imageSrc:
            'https://www.mattressfirm.com/_next/image?url=https%3A%2F%2Fimages-us-prod.cms.dynamics365commerce.ms%2Fcms%2Fapi%2Fcncgmclkfv%2FimageFileData%2Fsearch%3FfileName%3D%2FProducts%2F143959P%2520%255E%2520%2520%255E%2520Queen%2520%255E%2520%2520%255E%2520Prime_000_001.png%26fallback%3D%2FProducts%2F143959P_000_001.png',
        price: 700,
        description: 'Premium quality',
        link: '#',
        category: 4,
    },
    {
        id: 8,
        name: 'Mattress 8',
        imageSrc:
            'https://www.mattressfirm.com/_next/image?url=https%3A%2F%2Fimages-us-prod.cms.dynamics365commerce.ms%2Fcms%2Fapi%2Fcncgmclkfv%2FimageFileData%2Fsearch%3FfileName%3D%2FProducts%2F144077P%2520%255E%2520%2520%255E%2520Queen%2520%255E%2520%2520%255E%2520Prime_000_001.png%26fallback%3D%2FProducts%2F144077P_000_001.png',
        price: 290,
        description: 'Value for money',
        link: '#',
        category: 2,
    },
    {
        id: 9,
        name: 'Mattress 9',
        imageSrc:
            'https://www.mattressfirm.com/_next/image?url=https%3A%2F%2Fimages-us-prod.cms.dynamics365commerce.ms%2Fcms%2Fapi%2Fcncgmclkfv%2FimageFileData%2Fsearch%3FfileName%3D%2FProducts%2F143959P%2520%255E%2520%2520%255E%2520Queen%2520%255E%2520%2520%255E%2520Prime_000_001.png%26fallback%3D%2FProducts%2F143959P_000_001.png',
        price: 450,
        description: 'Orthopedic mattress',
        link: '#',
        category: 4,
    },
    {
        id: 10,
        name: 'Mattress 10',
        imageSrc:
            'https://www.mattressfirm.com/_next/image?url=https%3A%2F%2Fimages-us-prod.cms.dynamics365commerce.ms%2Fcms%2Fapi%2Fcncgmclkfv%2FimageFileData%2Fsearch%3FfileName%3D%2FProducts%2F144077P%2520%255E%2520%2520%255E%2520Queen%2520%255E%2520%2520%255E%2520Prime_000_001.png%26fallback%3D%2FProducts%2F144077P_000_001.png',
        price: 390,
        description: 'Best for kids',
        link: '#',
        category: 3,
    },
]

export default items
