function slime()
{

	let p_images = [
		"data/player/player_right.png",
		"data/player/player_left.png",
		"data/player/player_backward.png",
		"data/player/player_backward_left.png",
		"data/player/player_backward_right.png",
		"data/player/player_forward.png",
		"data/player/player_forward_left.png",
		"data/player/player_forward_right.png",
	];
	let p_assets = {};
	load_assets(p_images, [], function(progress, file, asset, type)
	{
		p_assets[file] = asset;
		if(progress >= 1.0)
		{
			init();
		}
	});

	function init()
	{
		let p_right = p_assets["data/player/player_right.png"];
		let p_left = p_assets["data/player/player_left.png"];
		let p_back = p_assets["data/player/player_backward.png"];
		let p_back_left = p_assets["data/player/player_backward_left.png"];
		let p_back_right = p_assets["data/player/player_backward_right.png"];
		let p_forward = p_assets["data/player/player_forward.png"];
		let p_forward_left = p_assets["data/player/player_forward_left.png"];
		let p_forward_right = p_assets["data/player/player_forward_right.png"];

		let left_input = newInputType("left", ["a", "h", "ArrowLeft"]);
		let right_input = newInputType("right", ["d", "l", "ArrowRight"]);

		let down_input = newInputType("down", ["s", "j", "ArrowDown"]);
		let up_input = newInputType("up", ["w", "k", "ArrowUp"]);

		let sq = new Squid(vec(100, 100), p_right);

		sq.speed = 5;

		sq.listen("tick", function()
		{
			if(down_input.pressed)
			{
				sq.image = p_forward;
				sq.velocity.y = sq.speed;
			}
			if(up_input.pressed)
			{
				sq.image = p_back;
				sq.velocity.y = -sq.speed;
			}

			if(left_input.pressed)
			{
				sq.image = p_left;
				sq.velocity.x = -sq.speed;
			}
			if(right_input.pressed)
			{
				sq.image = p_right;
				sq.velocity.x = sq.speed;
			}

			if(right_input.pressed && down_input.pressed)
			{
				sq.image = p_forward_right;
			}
			if(left_input.pressed && down_input.pressed)
			{
				sq.image = p_forward_left;
			}

			if(right_input.pressed && up_input.pressed)
			{
				sq.image = p_back_right;
			}
			if(left_input.pressed && up_input.pressed)
			{
				sq.image = p_back_left;
			}

			sq.velocity.x *= 0.90;
			sq.velocity.y *= 0.90;

			if(abs(sq.velocity.x) < 0.01 && abs(sq.velocity.y) < 0.01)
			{
				sq.image = p_forward
			}
		});
	}
}