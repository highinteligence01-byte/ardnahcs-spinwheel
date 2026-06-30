const prizes = [
    {
        text: "100 Gold",
        color: "#EF4444",
        weight: 20
    },
    {
        text: "200 Gold",
        color: "#F59E0B",
        weight: 20
    },
    {
        text: "500 Gold",
        color: "#10B981",
        weight: 15
    },
    {
        text: "1000 Gold",
        color: "#3B82F6",
        weight: 10
    },
    {
        text: "Epic Item",
        color: "#8B5CF6",
        weight: 5
    },
    {
        text: "Legendary",
        color: "#EC4899",
        weight: 1
    },
    {
        text: "Try Again",
        color: "#6B7280",
        weight: 25
    },
    {
        text: "Jackpot",
        color: "#14B8A6",
        weight: 4
    }
];

function getRandomPrize()
{
    let totalWeight = 0;

    for (const prize of prizes)
        totalWeight += prize.weight;

    let random = Math.random() * totalWeight;

    for (let i = 0; i < prizes.length; i++)
    {
        random -= prizes[i].weight;

        if (random <= 0)
            return i;
    }

    return prizes.length - 1;
}