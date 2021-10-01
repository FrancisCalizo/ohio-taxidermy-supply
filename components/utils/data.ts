type HunterCardInfo = {
  title: string;
  description: string;
  pictureUrl: string;
  buttonText: string;
  route: string;
};

type HunterCardOptions = HunterCardInfo[];

export const HUNTER_CARD_OPTIONS: HunterCardOptions = [
  {
    title: 'Build A Deer',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum error a temporibus voluptatibus quisquam vitae, natus dignissimos exercitationem unde aliquam perferendis sint quia asperiores reiciendis officiis rerum enim voluptatem possimus quas doloribus eligendi veniam excepturi nulla maiores? Ducimus id necessitatibus corrupti? Distinctio nostrum amet repudiandae omnis ratione illum ipsa aperiam.',
    pictureUrl: '/images/build-a-deer.jpg',
    buttonText: 'View Build Options',
    route: '/hunter/build-a-deer',
  },
  {
    title: 'Scout For Taxidermist',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum error a temporibus voluptatibus quisquam vitae, natus dignissimos exercitationem unde aliquam perferendis sint quia asperiores reiciendis officiis rerum enim voluptatem possimus quas doloribus eligendi veniam excepturi nulla maiores? Ducimus id necessitatibus corrupti? Distinctio nostrum amet repudiandae omnis ratione illum ipsa aperiam.',
    pictureUrl: '/images/scout-taxidermist.jpg',
    buttonText: 'View Scout Options',
    route: '/hunter/scout-taxidermist',
  },
];
