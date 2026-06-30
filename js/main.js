const spinButton = document.getElementById("spinButton");
const result = document.getElementById("result");

let spinning = false;

spinButton.addEventListener("click", spinWheel);

function spinWheel()
{
    if(spinning)
        return;

    spinning = true;

    spinButton.disabled = true;

    const winner = getRandomPrize();

    const sliceAngle = 360 / prizes.length;

    const margin = 0.08

    const randdecimal = margin + Math.random() * (1 - margin * 2); 

    const targetAngle =
        360 * 8 +
        (360 - (winner * sliceAngle + sliceAngle * randdecimal));

    const startRotation = currentRotation;
    const endRotation = currentRotation + targetAngle;

    const duration = 5000;

    const startTime = performance.now();

    function animate(now)
    {
        const elapsed = now - startTime;

        let t = elapsed / duration;

        if(t > 1)
            t = 1;

        const ease =
            1 - Math.pow(1 - t, 4);

        currentRotation =
            (startRotation +
            (endRotation - startRotation) * ease)
            * Math.PI / 180;

        drawWheel();

        if(t < 1)
        {
            requestAnimationFrame(animate);
        }
        else
        {
            currentRotation %= Math.PI * 2;

            drawWheel();

            result.textContent =
                "You won : " + prizes[winner].text;

            spinning = false;

            spinButton.disabled = false;
        }
    }

    requestAnimationFrame(animate);
}