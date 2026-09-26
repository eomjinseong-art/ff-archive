import { USA_MOTORS_LABEL, usaMotorsCarUrl } from "@/lib/site";

type UsaMotorsCar = {
  catalogSlug: string;
  nameKo: string;
  nameEn: string;
};

/**
 * Model pages on usa-motors.vercel.app. Each path returned HTTP 200
 * and a catalog <title> before it was listed here.
 */
const USA_MOTORS_CARS: Record<string, UsaMotorsCar> = {
  "buick-grand-national-1987": {
    catalogSlug: "buick-grand-national",
    nameKo: "뷰익 그랜드 내셔널",
    nameEn: "Buick Grand National",
  },
  "ford-mustang-shelby-gt350-2015": {
    catalogSlug: "ford-mustang-shelby-gt350",
    nameKo: "포드 머스탱 셸비 GT350",
    nameEn: "Ford Mustang Shelby GT350",
  },
  "jeep-gladiator-2020": {
    catalogSlug: "jeep-gladiator",
    nameKo: "지프 글래디에이터",
    nameEn: "Jeep Gladiator",
  },
  "jeep-wrangler-rubicon-furious7": {
    catalogSlug: "jeep-wrangler",
    nameKo: "지프 랭글러",
    nameEn: "Jeep Wrangler",
  },
  "dodge-viper-furious7": {
    catalogSlug: "dodge-viper",
    nameKo: "닷지 바이퍼",
    nameEn: "Dodge Viper",
  },
  "chevrolet-corvette-grand-sport-replica": {
    catalogSlug: "chevrolet-corvette",
    nameKo: "쉐보레 콜벳",
    nameEn: "Chevrolet Corvette",
  },
  "ford-gt40": {
    catalogSlug: "ford-gt40",
    nameKo: "포드 GT40",
    nameEn: "Ford GT40",
  },
};

export type UsaMotorsLink = UsaMotorsCar & {
  siteLabel: string;
  href: string;
};

export function usaMotorsForCar(slug: string): UsaMotorsLink | undefined {
  const car = USA_MOTORS_CARS[slug];
  if (!car) return undefined;
  return {
    ...car,
    siteLabel: USA_MOTORS_LABEL,
    href: usaMotorsCarUrl(`/cars/${car.catalogSlug}`),
  };
}
