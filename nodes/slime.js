function slime()
{
	load_image("data/player.png", function(slime_img)
	{
		let sq = new Squid(vec(100, 100), slime_img);
		sq.listen("tick", function()
		{
			//sq.position.x += 1;
		});
	});
}