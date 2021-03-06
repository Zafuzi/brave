let screen = vec(1920, 1080);
canvas.width = screen.x;
canvas.height = screen.y;

let ctx;

document.addEventListener("DOMContentLoaded", function()
{

	ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = true;
	ctx.imageSmoothingQuality = "high";

	canvas.style.width = "unset";
	canvas.style.height = "unset";
	canvas.style.top = "unset";
	canvas.style.left = "unset";

	let toggleDebug = newInputType("toggleDebug", ["`"]);

	let brain = new Thing();
		brain.listen("tick", function()
		{
			let image = {
				x: 0, y: 0, width: screen.x, height: screen.y
			};

			let originalWidth = image.width;
			let originalHeight = image.height;

			let options = {
				container: new AS.Size(window.innerWidth, window.innerHeight),
				target: new AS.Size(originalWidth, originalHeight),
				policy: AS.POLICY.ShowAll
			};

			let rect = AS.getScaledRect(options);

			image.x = rect.x;
			image.y = rect.y;
			image.width = rect.width;
			image.height = rect.height;

			canvas.style.width = image.width + "px";
			canvas.style.height = image.height + "px";
			canvas.style.top = image.top + "px";
			canvas.style.left = image.left + "px";

			if(toggleDebug.pressed && input.debounce === 0)
			{
				debug = !debug;
				input.debounce = 20;
			}
		});

	slime();
	tick(true);
});