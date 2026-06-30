const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");

const radius = canvas.width / 2;

let currentRotation = 0;

function drawWheel()
{
    const angle = (Math.PI * 2) / prizes.length;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.save();

    ctx.translate(radius, radius);
    ctx.rotate(currentRotation);

    for(let i = 0; i < prizes.length; i++)
    {
        const start = i * angle;
        const end = start + angle;

        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.arc(0,0,radius,start,end);
        ctx.closePath();

        ctx.fillStyle = prizes[i].color;
        ctx.fill();

        ctx.strokeStyle = "#FFFFFF";
        ctx.lineWidth = 3;
        ctx.stroke();

        ctx.save();

        ctx.rotate(start + angle/2);

        ctx.textAlign = "right";
        ctx.fillStyle = "white";
        ctx.font = "bold 22px Arial";

        ctx.fillText(prizes[i].text, radius - 20, 8);

        ctx.restore();
    }

    ctx.restore();
}

drawWheel();