(function() {alert("Welcome to BREAKOUT BOOKMARKLET! Hit the ball to break all the blocks! One you break all of them, the game will restart, but it will be faster!"); var width = window.innerWidth; var height = window.innerHeight; var ballxpos = 683; var ballypos = 200; var randomnum = Math.floor(Math.random() * (2 - 1 + 1) + 1); if (randomnum == 1) { var ballchangex = 1; } if (randomnum == 2) { var ballchangex = -1; } var ballchangey = 1; var ballspeed = 4; var xpos = 683; var ypos = 605; var playerxmove = 0; var playerspeed = 7; var score = 0; var done = 0; var s1width = 180; var s1height = 40; var s1xpos = 1366 / 2; s1xpos = s1xpos - s1width / 2; var s1ypos = 10; var s2width = 180; var s2height = 40; var s2xpos = 1366 / 2; s2xpos = s2xpos - s2width / 2 + s2width + 10; var s2ypos = 10; var s3width = 180; var s3height = 40; var s3xpos = 1366 / 2; s3xpos = s3xpos - s3width / 2 - s3width - 10; var s3ypos = 10; var s4width = 180; var s4height = 40; var s4xpos = 1366 / 2; s4xpos = s4xpos - s4width / 2 - s4width - 10; var s4ypos = 10; s4ypos = s4ypos + s4height + 10; var s5width = 180; var s5height = 40; var s5xpos = 1366 / 2; s5xpos = s5xpos - s5width / 2 + s5width + 10; var s5ypos = 10; s5ypos = s5ypos + s5height + 10; var s6width = 180; var s6height = 40; var s6xpos = 1366 / 2; s6xpos = s6xpos - s6width / 2; var s6ypos = 10; s6ypos = s6ypos + s6height + 10; var s7width = 180; var s7height = 40; var s7xpos = 1366 / 2; s7xpos = s7xpos - s7width / 2 - s7width - 10; var s7ypos = 10; s7ypos = s7ypos + s7height + s7height + 20; var s8width = 180; var s8height = 40; var s8xpos = 1366 / 2; s8xpos = s8xpos - s8width / 2 + s8width + 10; var s8ypos = 10; s8ypos = s8ypos + s8height + 10 + s8height + 10; var s9width = 180; var s9height = 40; var s9xpos = 1366 / 2; s9xpos = s9xpos - s9width / 2; var s9ypos = 10; s9ypos = s9ypos + s9height + 10 + s9height + 10; var s10width = 180; var s10height = 40; var s10xpos = 1366 / 2; s10xpos = s10xpos - s10width / 2 - s10width - 10; var s10ypos = 10; s10ypos = s10ypos + s10height + s10height + s10height + 30; var s11width = 180; var s11height = 40; var s11xpos = 1366 / 2; s11xpos = s11xpos - s11width / 2 + s11width + 10; var s11ypos = 10; s11ypos = s11ypos + s11height + 10 + s11height + 10 + s11height + 10; var s12width = 180; var s12height = 40; var s12xpos = 1366 / 2; s12xpos = s12xpos - s12width / 2; var s12ypos = 10; s12ypos = s12ypos + s12height + 10 + s12height + 10 + s12height + 10; var s13width = 180; var s13height = 40; var s13xpos = 2126 / 2; s13xpos = s13xpos - s13width / 2; var s13ypos = 10; s13ypos = s13ypos + s13height + 10 + s13height + 10 + s13height + 10; var s14width = 180; var s14height = 40; var s14xpos = 2505 / 2; s14xpos = s14xpos - s14width / 2; var s14ypos = 10; s14ypos = s14ypos + s14height + 10 + s14height + 10 + s14height + 10; var s15width = 180; var s15height = 40; var s15xpos = 2126 / 2; s15xpos = s15xpos - s15width / 2; var s15ypos = -40; s15ypos = s15ypos + s15height + 10 + s15height + 10 + s15height + 10; var s16width = 180; var s16height = 40; var s16xpos = 2505 / 2; s16xpos = s16xpos - s16width / 2; var s16ypos = -40; s16ypos = s16ypos + s16height + 10 + s16height + 10 + s16height + 10; (function() { var me = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(me); me.style.position = 'fixed'; me.style.bottom = '0px'; me.style.right = '0px'; me.style.margin = '0px'; me.style.paddingTop = '0px'; me.style.width = '' + width + 'px'; me.style.height = '20px'; me.style.zIndex = 10000; me.style.opacity = 0.8; me.style.color = 'white'; me.style.backgroundColor = 'red'; me.style.border = '0px solid black'; me.style.textAlign = 'center'; me.style.cursor = 'pointer'; me.id = 'me'; me.style.display = 'circle'; me.innerText = 'v3.02 - Made by youtube channel @S-O-M-E-O-N-E'; document.getElementById('me').addEventListener('click', function() { window.open('https://youtube.com/@S-O-M-E-O-N-E'); }); }()); (function() { var you = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(you); you.style.position = 'fixed'; you.style.top = '' + ypos + 'px'; you.style.left = '' + xpos + 'px'; you.style.margin = '0px'; you.style.width = '200px'; you.style.height = '22px'; you.style.zIndex = 10000; you.style.opacity = 1; you.style.color = 'black'; you.style.backgroundColor = 'blue'; you.style.border = '2px solid black'; you.style.textAlign = 'center'; you.id = 'you'; you.style.display = 'block'; }()); (function() { var ball = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(ball); ball.style.position = 'fixed'; ball.style.top = '' + ballypos + 'px'; ball.style.left = '' + ballxpos + 'px'; ball.style.margin = '0px'; ball.style.width = '48px'; ball.style.height = '48px'; ball.style.zIndex = 10000; ball.style.opacity = 1; ball.style.color = 'black'; ball.style.backgroundColor = 'gray'; ball.style.border = '3px solid black'; ball.style.textAlign = 'center'; ball.id = 'ball'; ball.style.display = 'block'; }()); (function() { var scorer = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(scorer); scorer.style.position = 'fixed'; scorer.style.top = '10px'; scorer.style.left = '10px'; scorer.style.margin = '0px'; scorer.style.width = '100px'; scorer.style.height = '20px'; scorer.style.zIndex = 10000; scorer.style.opacity = 1; scorer.style.color = 'black'; scorer.style.backgroundColor = 'white'; scorer.style.paddingTop = '5px'; scorer.style.border = '3px solid black'; scorer.style.textAlign = 'center'; scorer.id = 'scorer'; scorer.style.display = 'block'; scorer.innerText = 'score: ' + score + ''; }()); function start() { ballspeed = ballspeed + 0.005; playerspeed = playerspeed + 0.005; s1width = 180; s1height = 40; s1xpos = 1366 / 2; s1xpos = s1xpos - s1width / 2; s1ypos = 10; s2width = 180; s2height = 40; s2xpos = 1366 / 2; s2xpos = s2xpos - s2width / 2 + s2width + 10; s2ypos = 10; s3width = 180; s3height = 40; s3xpos = 1366 / 2; s3xpos = s3xpos - s3width / 2 - s3width - 10; s3ypos = 10; s4width = 180; s4height = 40; s4xpos = 1366 / 2; s4xpos = s4xpos - s4width / 2 - s4width - 10; s4ypos = 10; s4ypos = s4ypos + s4height + 10; s5width = 180; s5height = 40; s5xpos = 1366 / 2; s5xpos = s5xpos - s5width / 2 + s5width + 10; s5ypos = 10; s5ypos = s5ypos + s5height + 10; s6width = 180; s6height = 40; s6xpos = 1366 / 2; s6xpos = s6xpos - s6width / 2; s6ypos = 10; s6ypos = s6ypos + s6height + 10; s7width = 180; s7height = 40; s7xpos = 1366 / 2; s7xpos = s7xpos - s7width / 2 - s7width - 10; s7ypos = 10; s7ypos = s7ypos + s7height + s7height + 20; s8width = 180; s8height = 40; s8xpos = 1366 / 2; s8xpos = s8xpos - s8width / 2 + s8width + 10; s8ypos = 10; s8ypos = s8ypos + s8height + 10 + s8height + 10; s9width = 180; s9height = 40; s9xpos = 1366 / 2; s9xpos = s9xpos - s9width / 2; s9ypos = 10; s9ypos = s9ypos + s9height + 10 + s9height + 10; s10width = 180; s10height = 40; s10xpos = 1366 / 2; s10xpos = s10xpos - s10width / 2 - s10width - 10; s10ypos = 10; s10ypos = s10ypos + s10height + s10height + s10height + 30; s11width = 180; s11height = 40; s11xpos = 1366 / 2; s11xpos = s11xpos - s11width / 2 + s11width + 10; s11ypos = 10; s11ypos = s11ypos + s11height + 10 + s11height + 10 + s11height + 10; s12width = 180; s12height = 40; s12xpos = 1366 / 2; s12xpos = s12xpos - s12width / 2; s12ypos = 10; s12ypos = s12ypos + s12height + 10 + s12height + 10 + s12height + 10; var s13width = 180; var s13height = 40; var s13xpos = 2126 / 2; s13xpos = s13xpos - s13width / 2; var s13ypos = 10; s13ypos = s13ypos + s13height + 10 + s13height + 10 + s13height + 10; var s14width = 180; var s14height = 40; var s14xpos = 2505 / 2; s14xpos = s14xpos - s14width / 2; var s14ypos = 10; s14ypos = s14ypos + s14height + 10 + s14height + 10 + s14height + 10; var s15width = 180; var s15height = 40; var s15xpos = 2126 / 2; s15xpos = s15xpos - s15width / 2; var s15ypos = -40; s15ypos = s15ypos + s15height + 10 + s15height + 10 + s15height + 10; var s16width = 180; var s16height = 40; var s16xpos = 2505 / 2; s16xpos = s16xpos - s16width / 2; var s16ypos = -40; s16ypos = s16ypos + s16height + 10 + s16height + 10 + s16height + 10; (function() { var s1 = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(s1); s1.style.position = 'fixed'; s1.style.top = '' + s1ypos + 'px'; s1.style.left = '' + s1xpos + 'px'; s1.style.margin = '0px'; s1.style.width = '' + s1width + 'px'; s1.style.height = '' + s1height + 'px'; s1.style.zIndex = 10000; s1.style.opacity = 1; s1.style.color = 'black'; s1.style.backgroundColor = 'green'; s1.style.paddingTop = '5px'; s1.style.border = '3px solid black'; s1.style.textAlign = 'center'; s1.id = 's1'; s1.style.display = 'block'; }()); (function() { var s2 = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(s2); s2.style.position = 'fixed'; s2.style.top = '' + s2ypos + 'px'; s2.style.left = '' + s2xpos + 'px'; s2.style.margin = '0px'; s2.style.width = '' + s2width + 'px'; s2.style.height = '' + s2height + 'px'; s2.style.zIndex = 10000; s2.style.opacity = 1; s2.style.color = 'black'; s2.style.backgroundColor = 'magenta'; s2.style.paddingTop = '5px'; s2.style.border = '3px solid black'; s2.style.textAlign = 'center'; s2.id = 's2'; s2.style.display = 'block'; }()); (function() { var s3 = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(s3); s3.style.position = 'fixed'; s3.style.top = '' + s3ypos + 'px'; s3.style.left = '' + s3xpos + 'px'; s3.style.margin = '0px'; s3.style.width = '' + s3width + 'px'; s3.style.height = '' + s3height + 'px'; s3.style.zIndex = 10000; s3.style.opacity = 1; s3.style.color = 'black'; s3.style.backgroundColor = 'orange'; s3.style.paddingTop = '5px'; s3.style.border = '3px solid black'; s3.style.textAlign = 'center'; s3.id = 's3'; s3.style.display = 'block'; }()); (function() { var s7 = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(s7); s7.style.position = 'fixed'; s7.style.top = '' + s7ypos + 'px'; s7.style.left = '' + s7xpos + 'px'; s7.style.margin = '0px'; s7.style.width = '' + s7width + 'px'; s7.style.height = '' + s7height + 'px'; s7.style.zIndex = 10000; s7.style.opacity = 1; s7.style.color = 'black'; s7.style.backgroundColor = 'cyan'; s7.style.paddingTop = '5px'; s7.style.border = '3px solid black'; s7.style.textAlign = 'center'; s7.id = 's7'; s7.style.display = 'block'; }()); (function() { var s8 = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(s8); s8.style.position = 'fixed'; s8.style.top = '' + s8ypos + 'px'; s8.style.left = '' + s8xpos + 'px'; s8.style.margin = '0px'; s8.style.width = '' + s8width + 'px'; s8.style.height = '' + s8height + 'px'; s8.style.zIndex = 10000; s8.style.opacity = 1; s8.style.color = 'black'; s8.style.backgroundColor = 'red'; s8.style.paddingTop = '5px'; s8.style.border = '3px solid black'; s8.style.textAlign = 'center'; s8.id = 's8'; s8.style.display = 'block'; }()); (function() { var s9 = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(s9); s9.style.position = 'fixed'; s9.style.top = '' + s9ypos + 'px'; s9.style.left = '' + s9xpos + 'px'; s9.style.margin = '0px'; s9.style.width = '' + s9width + 'px'; s9.style.height = '' + s9height + 'px'; s9.style.zIndex = 10000; s9.style.opacity = 1; s9.style.color = 'black'; s9.style.backgroundColor = 'lime'; s9.style.paddingTop = '5px'; s9.style.border = '3px solid black'; s9.style.textAlign = 'center'; s9.id = 's9'; s9.style.display = 'block'; }()); (function() { var s6 = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(s6); s6.style.position = 'fixed'; s6.style.top = '' + s6ypos + 'px'; s6.style.left = '' + s6xpos + 'px'; s6.style.margin = '0px'; s6.style.width = '' + s6width + 'px'; s6.style.height = '' + s6height + 'px'; s6.style.zIndex = 10000; s6.style.opacity = 1; s6.style.color = 'black'; s6.style.backgroundColor = 'yellow'; s6.style.paddingTop = '5px'; s6.style.border = '3px solid black'; s6.style.textAlign = 'center'; s6.id = 's6'; s6.style.display = 'block'; }()); (function() { var s5 = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(s5); s5.style.position = 'fixed'; s5.style.top = '' + s5ypos + 'px'; s5.style.left = '' + s5xpos + 'px'; s5.style.margin = '0px'; s5.style.width = '' + s5width + 'px'; s5.style.height = '' + s5height + 'px'; s5.style.zIndex = 10000; s5.style.opacity = 1; s5.style.color = 'black'; s5.style.backgroundColor = 'purple'; s5.style.paddingTop = '5px'; s5.style.border = '3px solid black'; s5.style.textAlign = 'center'; s5.id = 's5'; s5.style.display = 'block'; }()); (function() { var s4 = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(s4); s4.style.position = 'fixed'; s4.style.top = '' + s4ypos + 'px'; s4.style.left = '' + s4xpos + 'px'; s4.style.margin = '0px'; s4.style.width = '' + s4width + 'px'; s4.style.height = '' + s4height + 'px'; s4.style.zIndex = 10000; s4.style.opacity = 1; s4.style.color = 'black'; s4.style.backgroundColor = 'pink'; s4.style.paddingTop = '5px'; s4.style.border = '3px solid black'; s4.style.textAlign = 'center'; s4.id = 's4'; s4.style.display = 'block'; }()); (function() { var s10 = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(s10); s10.style.position = 'fixed'; s10.style.top = '' + s10ypos + 'px'; s10.style.left = '' + s10xpos + 'px'; s10.style.margin = '0px'; s10.style.width = '' + s10width + 'px'; s10.style.height = '' + s10height + 'px'; s10.style.zIndex = 10000; s10.style.opacity = 1; s10.style.color = 'black'; s10.style.backgroundColor = 'brown'; s10.style.paddingTop = '5px'; s10.style.border = '3px solid black'; s10.style.textAlign = 'center'; s10.id = 's10'; s10.style.display = 'block'; }()); (function() { var s11 = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(s11); s11.style.position = 'fixed'; s11.style.top = '' + s11ypos + 'px'; s11.style.left = '' + s11xpos + 'px'; s11.style.margin = '0px'; s11.style.width = '' + s11width + 'px'; s11.style.height = '' + s11height + 'px'; s11.style.zIndex = 10000; s11.style.opacity = 1; s11.style.color = 'black'; s11.style.backgroundColor = 'blue'; s11.style.paddingTop = '5px'; s11.style.border = '3px solid black'; s11.style.textAlign = 'center'; s11.id = 's11'; s8.style.display = 'block'; }()); (function() { var s12 = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(s12); s12.style.position = 'fixed'; s12.style.top = '' + s12ypos + 'px'; s12.style.left = '' + s12xpos + 'px'; s12.style.margin = '0px'; s12.style.width = '' + s12width + 'px'; s12.style.height = '' + s12height + 'px'; s12.style.zIndex = 10000; s12.style.opacity = 1; s12.style.color = 'black'; s12.style.backgroundColor = 'orange'; s12.style.paddingTop = '5px'; s12.style.border = '3px solid black'; s12.style.textAlign = 'center'; s12.id = 's12'; s12.style.display = 'block'; }()); (function() { var s13 = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(s13); s13.style.position = 'fixed'; s13.style.top = '' + s13ypos + 'px'; s13.style.left = '' + s13xpos + 'px'; s13.style.margin = '0px'; s13.style.width = '' + s13width + 'px'; s13.style.height = '' + s13height + 'px'; s13.style.zIndex = 10000; s13.style.opacity = 1; s13.style.color = 'black'; s13.style.backgroundColor = 'cyan'; s13.style.paddingTop = '5px'; s13.style.border = '3px solid black'; s13.style.textAlign = 'center'; s13.id = 's13'; s13.style.display = 'block'; }()); (function() { var s14 = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(s14); s14.style.position = 'fixed'; s14.style.top = '' + s14ypos + 'px'; s14.style.left = '' + s14xpos + 'px'; s14.style.margin = '0px'; s14.style.width = '' + s14width + 'px'; s14.style.height = '' + s14height + 'px'; s14.style.zIndex = 10000; s14.style.opacity = 1; s14.style.color = 'black'; s14.style.backgroundColor = 'yellow'; s14.style.paddingTop = '5px'; s14.style.border = '3px solid black'; s14.style.textAlign = 'center'; s14.id = 's14'; s14.style.display = 'block'; }()); (function() { var s15 = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(s15); s15.style.position = 'fixed'; s15.style.top = '' + s15ypos + 'px'; s15.style.left = '' + s15xpos + 'px'; s15.style.margin = '0px'; s15.style.width = '' + s15width + 'px'; s15.style.height = '' + s15height + 'px'; s15.style.zIndex = 10000; s15.style.opacity = 1; s15.style.color = 'black'; s15.style.backgroundColor = 'pink'; s15.style.paddingTop = '5px'; s15.style.border = '3px solid black'; s15.style.textAlign = 'center'; s15.id = 's15'; s15.style.display = 'block'; }()); (function() { var s16 = document.createElement('div'); var body = document.getElementsByTagName('body')[0]; body.appendChild(s16); s16.style.position = 'fixed'; s16.style.top = '' + s16ypos + 'px'; s16.style.left = '' + s16xpos + 'px'; s16.style.margin = '0px'; s16.style.width = '' + s16width + 'px'; s16.style.height = '' + s16height + 'px'; s16.style.zIndex = 10000; s16.style.opacity = 1; s16.style.color = 'black'; s16.style.backgroundColor = 'brown'; s16.style.paddingTop = '5px'; s16.style.border = '3px solid black'; s16.style.textAlign = 'center'; s16.id = 's16'; s16.style.display = 'block'; }()); function moveball() { if (ballchangex == 1) { ballxpos = ballxpos + ballspeed; ball.style.top = '' + ballypos + 'px'; ball.style.left = '' + ballxpos + 'px'; } if (ballchangey == 1) { ballypos = ballypos + ballspeed; ball.style.top = '' + ballypos + 'px'; ball.style.left = '' + ballxpos + 'px'; } if (ballchangex == -1) { ballxpos = ballxpos - ballspeed; ball.style.top = '' + ballypos + 'px'; ball.style.left = '' + ballxpos + 'px'; } if (ballchangey == -1) { ballypos = ballypos - ballspeed; ball.style.top = '' + ballypos + 'px'; ball.style.left = '' + ballxpos + 'px'; } } function bounce() { if (ballypos >= height - 50) { ballxpos = -9999999999999999999; ballypos = -9999999999999999999999999; ballchangex = 0; ballchangey = 0; clearInterval(bounce); clearInterval(moveplayer); clearInterval(moveball); clearInterval(colliding); alert("game over. your score was " + score + "."); window.location.reload(1); s1.parentNode.removeChild(s1); s1width = 0; s1height = 0; s1xpos = -999999; s1ypos = -999999; s2.parentNode.removeChild(s2); s2width = 0; s2height = 0; s2xpos = -999999; s2ypos = -999999; s3.parentNode.removeChild(s3); s3width = 0; s3height = 0; s3xpos = -999999; s3ypos = -999999; s4.parentNode.removeChild(s4); s4width = 0; s4height = 0; s4xpos = -999999; s4ypos = -999999; s5.parentNode.removeChild(s5); s5width = 0; s5height = 0; s5xpos = -999999; s5ypos = -999999; s6.parentNode.removeChild(s6); s6width = 0; s6height = 0; s6xpos = -999999; s6ypos = -999999; s7.parentNode.removeChild(s7); s7width = 0; s7height = 0; s7xpos = -999999; s7ypos = -999999; s8.parentNode.removeChild(s8); s8width = 0; s8height = 0; s8xpos = -999999; s8ypos = -999999; s9.parentNode.removeChild(s9); s9width = 0; s9height = 0; s9xpos = -999999; s9ypos = -999999; s10.parentNode.removeChild(s10); s10width = 0; s10height = 0; s10xpos = -999999; s10ypos = -999999; s11.parentNode.removeChild(s11); s11width = 0; s11height = 0; s11xpos = -999999; s11ypos = -999999; s12.parentNode.removeChild(s12); s12width = 0; s12height = 0; s12xpos = -999999; s12ypos = -999999; s14.parentNode.removeChild(s14); s14width = 0; s14height = 0; s14xpos = -999999; s14ypos = -999999; s13.parentNode.removeChild(s13); s13width = 0; s13height = 0; s13xpos = -999999; s13ypos = -999999; s15.parentNode.removeChild(s15); s15width = 0; s15height = 0; s15xpos = -999999; s15ypos = -999999; s16.parentNode.removeChild(s16); s16width = 0; s16height = 0; s16xpos = -999999; s16ypos = -999999; you.parentNode.removeChild(you); ball.parentNode.removeChild(ball); ballchangex = 0; ballchangey = 0; scorer.parentNode.removeChild(scorer); me.parentNode.removeChild(me); return; } if (ballxpos <= 0) { ballchangex = 1; } if (ballypos <= 0) { ballchangey = 1; } if (ballxpos >= width - 50) { ballchangex = -1; } } function moveplayer() { if (playerxmove == 1) { if (xpos + playerspeed >= 1366 - 200) {} else { xpos = xpos + playerspeed; you.style.top = '' + ypos + 'px'; you.style.left = '' + xpos + 'px'; } } if (playerxmove == -1) { if (xpos + playerspeed <= 0) {} else { xpos = xpos - playerspeed; you.style.top = '' + ypos + 'px'; you.style.left = '' + xpos + 'px'; } } } window.addEventListener("keydown", function(event) { if (event.key == "ArrowLeft") { playerxmove = -1; } if (event.key == "ArrowRight") { playerxmove = 1; } }); window.addEventListener("keyup", function(event) { if (event.key == "ArrowLeft") { playerxmove = 0; } if (event.key == "ArrowRight") { playerxmove = 0; } }); function colliding() { if (ballxpos < s1xpos + s1width && ballxpos + 50 > s1xpos && ballypos < s1ypos + s1height && ballypos + 50 > s1ypos) { score = score + 1; done = done + 1; s1.parentNode.removeChild(s1); s1width = 0; s1height = 0; s1xpos = -999999; s1ypos = -999999; ballchangey = ballchangey * -1; } if (ballxpos < s2xpos + s2width && ballxpos + 50 > s2xpos && ballypos < s2ypos + s2height && ballypos + 50 > s2ypos) { score = score + 1; done = done + 1; s2.parentNode.removeChild(s2); s2width = 0; s2height = 0; s2xpos = -999999; s2ypos = -999999; ballchangey = ballchangey * -1; } if (ballxpos < s3xpos + s3width && ballxpos + 50 > s3xpos && ballypos < s3ypos + s3height && ballypos + 50 > s3ypos) { score = score + 1; done = done + 1; s3.parentNode.removeChild(s3); s3width = 0; s3height = 0; s3xpos = -999999; s3ypos = -999999; ballchangey = ballchangey * -1; } if (ballxpos < s4xpos + s4width && ballxpos + 50 > s4xpos && ballypos < s4ypos + s4height && ballypos + 50 > s4ypos) { score = score + 1; done = done + 1; s4.parentNode.removeChild(s4); s4width = 0; s4height = 0; s4xpos = -999999; s4ypos = -999999; ballchangey = ballchangey * -1; } if (ballxpos < s5xpos + s5width && ballxpos + 50 > s5xpos && ballypos < s5ypos + s5height && ballypos + 50 > s5ypos) { score = score + 1; done = done + 1; s5.parentNode.removeChild(s5); s5width = 0; s5height = 0; s5xpos = -999999; s5ypos = -999999; ballchangey = ballchangey * -1; } if (ballxpos < s6xpos + s6width && ballxpos + 50 > s6xpos && ballypos < s6ypos + s6height && ballypos + 50 > s6ypos) { score = score + 1; done = done + 1; s6.parentNode.removeChild(s6); s6width = 0; s6height = 0; s6xpos = -999999; s6ypos = -999999; ballchangey = ballchangey * -1; } if (ballxpos < s7xpos + s7width && ballxpos + 50 > s7xpos && ballypos < s7ypos + s7height && ballypos + 50 > s7ypos) { score = score + 1; done = done + 1; s7.parentNode.removeChild(s7); s7width = 0; s7height = 0; s7xpos = -999999; s7ypos = -999999; ballchangey = ballchangey * -1; } if (ballxpos < s8xpos + s8width && ballxpos + 50 > s8xpos && ballypos < s8ypos + s8height && ballypos + 50 > s8ypos) { score = score + 1; done = done + 1; s8.parentNode.removeChild(s8); s8width = 0; s8height = 0; s8xpos = -999999; s8ypos = -999999; ballchangey = ballchangey * -1; } if (ballxpos < s9xpos + s9width && ballxpos + 50 > s9xpos && ballypos < s9ypos + s9height && ballypos + 50 > s9ypos) { score = score + 1; done = done + 1; s9.parentNode.removeChild(s9); s9width = 0; s9height = 0; s9xpos = -999999; s9ypos = -999999; ballchangey = ballchangey * -1; } if (ballxpos < s12xpos + s12width && ballxpos + 50 > s12xpos && ballypos < s12ypos + s12height && ballypos + 50 > s12ypos) { score = score + 1; done = done + 1; s12.parentNode.removeChild(s12); s12width = 0; s12height = 0; s12xpos = -999999; s12ypos = -999999; ballchangey = ballchangey * -1; } if (ballxpos < s13xpos + s13width && ballxpos + 50 > s13xpos && ballypos < s13ypos + s13height && ballypos + 50 > s13ypos) { score = score + 1; done = done + 1; s13.parentNode.removeChild(s13); s13width = 0; s13height = 0; s13xpos = -999999; s13ypos = -999999; ballchangey = ballchangey * -1; } if (ballxpos < s14xpos + s14width && ballxpos + 50 > s14xpos && ballypos < s14ypos + s14height && ballypos + 50 > s14ypos) { score = score + 1; done = done + 1; s14.parentNode.removeChild(s14); s14width = 0; s14height = 0; s14xpos = -999999; s14ypos = -999999; ballchangey = ballchangey * -1; } if (ballxpos < s11xpos + s11width && ballxpos + 50 > s11xpos && ballypos < s11ypos + s11height && ballypos + 50 > s11ypos) { score = score + 1; done = done + 1; s11.parentNode.removeChild(s11); s11width = 0; s11height = 0; s11xpos = -999999; s11ypos = -999999; ballchangey = ballchangey * -1; } if (ballxpos < s10xpos + s10width && ballxpos + 50 > s10xpos && ballypos < s10ypos + s10height && ballypos + 50 > s10ypos) { score = score + 1; done = done + 1; s10.parentNode.removeChild(s10); s10width = 0; s10height = 0; s10xpos = -999999; s10ypos = -999999; ballchangey = ballchangey * -1; } if (ballxpos < s15xpos + s15width && ballxpos + 50 > s15xpos && ballypos < s15ypos + s15height && ballypos + 50 > s15ypos) { score = score + 1; done = done + 1; s15.parentNode.removeChild(s15); s15width = 0; s15height = 0; s15xpos = -999999; s15ypos = -999999; ballchangey = ballchangey * -1; } if (ballxpos < s16xpos + s16width && ballxpos + 50 > s16xpos && ballypos < s16ypos + s16height && ballypos + 50 > s16ypos) { score = score + 1; done = done + 1; s16.parentNode.removeChild(s16); s16width = 0; s16height = 0; s16xpos = -999999; s16ypos = -999999; ballchangey = ballchangey * -1; } scorer.innerText = 'score: ' + score + ''; } setInterval(colliding, 5); setInterval(moveball, 15); setInterval(bounce, 3); setInterval(moveplayer, 15); } start(); function next() { if (done >= 15) { start(); done = 0; } } function hit() { if (xpos < ballxpos + 50 && xpos + 200 > ballxpos && ypos < ballypos + 50 && ypos + 30 > ballypos) { if (xpos+35>ballxpos){ ballchangex = -1; } if (xpos+165<ballxpos){ ballchangex = 1; } ballchangey = -1; } } setInterval(next, 2); setInterval(hit, 2);})();
