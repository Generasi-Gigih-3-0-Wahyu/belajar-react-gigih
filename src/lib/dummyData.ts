interface ProfileData {
  id: number
  name?: string;
  imageUrl: string;
  gender: "Male" | "Female"
}

export const datas: ProfileData[] = [
  {
    id: 1,
    name: "Taylor Swift",
    imageUrl:
      "https://i.scdn.co/image/ab6761610000101ff173136b94ae2f75f49f8b2b",
    gender: "Female",
  },
  {
    id: 2,
    name: "Shawn Mendes",
    imageUrl:
      "https://i.scdn.co/image/ab6761610000a00046e7a06fa6dfefaed6a3f0db",
    gender: "Male",
  },
  {
    id: 3,
    imageUrl:
      "https://i.scdn.co/image/ab67706c0000dec589f71c80b882afb17fae93ed",
    gender: "Male",
  },
];