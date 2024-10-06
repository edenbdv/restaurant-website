import images from './images';


const menu = {
  pasta: [
    {
      title: 'Spaghetti Carbonara',
      price: '$18',
      tags: 'Spaghetti | Eggs | Pecorino cheese | Pancetta',
    },
    {
      title: 'Penne Arrabbiata',
      price: '$16',
      tags: 'Penne | Spicy tomato sauce | Garlic | Parsley',
    },
    {
      title: 'Fettuccine Alfredo',
      price: '$20',
      tags: 'Fettuccine | Butter | Parmesan cheese | Cream',
    },
    {
      title: 'Lasagna',
      price: '$22',
      tags: 'Layers of pasta | Beef | Cheese | Tomato sauce',
    },
  ],
  pizza: [
    {
      title: 'Margherita Pizza',
      price: '$15',
      tags: 'Tomato sauce | Fresh mozzarella | Basil',
    },
   
    {
      title: 'Quattro Formaggi',
      price: '$19',
      tags: 'Four cheeses | Mozzarella | Gorgonzola | Parmesan | Goat cheese',
    },
    {
      title: 'Vegetarian Pizza',
      price: '$17',
      tags: 'Tomato sauce | Mozzarella | Seasonal vegetables',
    },
  ],
  risotto: [
    {
      title: 'Risotto alla Milanese',
      price: '$24',
      tags: 'Arborio rice | Saffron | Parmesan cheese',
    },
    {
      title: 'Mushroom Risotto',
      price: '$22',
      tags: 'Arborio rice | Wild mushrooms | White wine | Parmesan',
    },
    {
      title: 'Mediterranean Herb Risotto',
      price: '$23',
      tags: 'Arborio rice | Fresh basil | Sun-dried tomatoes | Olive oil | Lemon zest',
    },

  ],
  dessert: [
    {
      title: 'Tiramisu',
      price: '$8',
      tags: 'Coffee-soaked ladyfingers | Mascarpone cheese | Cocoa powder',
    },
    {
      title: 'Panna Cotta',
      price: '$7',
      tags: 'Cream | Sugar | Vanilla | Berry coulis',
    },
    {
      title: 'Cannoli',
      price: '$9',
      tags: 'Pastry shells | Sweet ricotta filling | Chocolate chips',
    },
  ],
};

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Excellence in fine dining.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Emerging talent in the culinary world.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Top-notch service and ambiance.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Innovative and masterful cooking.',
  },
];

export default { menu, wines, cocktails, awards };
