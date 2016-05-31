	//Node class
	var Node = function(x,y) {
		this.x = x;
		this.y = y;
		this.next = null;
		this.filled = false;
	};
	
	//Player1 class
	var Player1 = function(){
		this.plist1 = null;
		}
	
	//Player1 endins
	Player1.prototype.endins = function(x,y){
		
		var newnode = new Node(x,y);
		
		if(this.plist1==null)
			this.plist1 = newnode;
		
		else{
			var temp1 = this.plist1;
			while(temp1.next!==null)
				temp1 = temp1.next;
			temp1.next = newnode;
		}
			
		};
		
	//Player2 class
	var Player2 = function(){
		this.plist2 = null;
		}
	
	//Player1 endins
	Player2.prototype.endins = function(x,y){
		
		var newnode = new Node(x,y);
		
		if(this.plist2==null)
			this.plist2 = newnode;
		
		else{
			var temp = this.plist2;
			while(temp.next!==null)
				temp = temp.next;
			temp.next = newnode;
		}
			
		};
		
	/*	Player2.prototype.display = function(){
		var temp1 = this.plist2;
		while(temp1.next!==null){
			window.alert("x = "+temp1.x+"y="+temp1.y);
			temp1 = temp1.next;
		}
	};*/
	//define player1's path
	function player1Path(){
	
	for(var x=618; x<=858; x+=120)
	p1.endins(x,9);
 
	for(var y=129; y<=489; y+=120)
	p1.endins(858,y);
  
	for(var x=738; x>=378; x-=120)
	p1.endins(x,489);
  
	for(var y=369; y>=9; y-=120)
	p1.endins(378,y);
  
	for(var y=9; y<=369; y+=120)
	p1.endins(498,y);
  
	for(var x=618; x<=738; x+=120)
	p1.endins(x,369);
  
	for(var y=249; y>=129; y-=120)
	p1.endins(738,y);
  
	for(var y=129; y<=249; y+=120)
	p1.endins(618,y);
	
	//p1.display();
	}
	
	//define Player2's path
	function player2Path(){
	
	for(var x=618; x>=378; x-=120)
	p2.endins(x,489);
 
	for(var y=369; y>=9; y-=120)
	p2.endins(378,y);
  
	for(var x=498; x<=858; x+=120)
	p2.endins(x,9);
  
	for(var y=129; y<=489; y+=120)
	p2.endins(858,y);
  
	for(var y=489; y>=129; y-=120)
	p2.endins(738,y);
  
	for(var x=618; x>=498; x-=120)
	p2.endins(x,129);
  
	for(var y=249; y<=369; y+=120)
	p2.endins(498,y);
  
	for(var y=369; y>=249; y-=120)
	p2.endins(618,y);
	
	//p2.display();
	}
	
	var p1 = new Player1();
	player1Path();
	var temp1 = p1.plist1;
	//var img1 = document.getElementById("img1");
	
	var p2 = new Player2();
	player2Path();
	var temp2 = p2.plist2;
	//var img2 = document.getElementById("img2");

	//player1 movement when he rolls 
	function movep1(){
		var img1 = document.getElementById("img1");
		var img2 = document.getElementById("img2");
		var rolled = 1+parseInt(Math.floor(Math.random()*6));
		alert("Player1 rolled = "+rolled);
		
		movep1Validate(rolled);

		temp1.filled = true;
		img1.style.left = temp1.x + "px";
		img1.style.top = temp1.y + "px";
		
		//checking whether player2 exists in the cell
		if(temp2.x==temp1.x && temp2.y==temp1.y && temp2.filled==true){
			alert("Player2 killed!!!");
			img2.style.left = p2.plist2.x + "px";
			img2.style.top = p2.plist2.y + "px";
			temp2 = p2.plist2;
		}
		
		//check player1 has reached the destination
		if(temp1.x==618 && temp1.y==249){
			alert("Player1 wins!!!!");
			document.body.style.backgroundColor= "green";
			document.getElementById("butt1").disabled = true;
			document.getElementById("butt2").disabled = true;
			}
		}
			
	function movep1Validate(rolled){
		
		 if(temp1.x==498 && temp1.y==369)
		 {	if(rolled == 1)
			{ temp1 = temp1.next;}
			else if(rolled == 2)
			{ temp1 = temp1.next.next;}
			 else if(rolled == 3)
			 {
				 temp1 = temp1.next.next.next;
			 }				 
				 
			 else if(rolled == 4)
			 { 
			temp1 = temp1.next.next.next.next;
			 }
			else if(rolled == 5)
			 {
				 temp1 = temp1.next.next.next.next.next;
			 }
			else if(rolled == 6)
			 {
				temp1.x = 618;
				temp1.y = 249;
				
			 }
		 }
		 else if(temp1.x==618 && temp1.y==369)
			 {
				if(rolled == 1)
			{ temp1 = temp1.next;}
			else if(rolled == 2)
			{ temp1 = temp1.next.next;}
			 else if(rolled == 3)
			 {
				 temp1 = temp1.next.next.next;
			 }				 
				 
			 else if(rolled == 4)
			 { 
			temp1 = temp1.next.next.next.next;
			 }
			else if(rolled == 5)
			 {
				temp1.x = 618;
				temp1.y = 249;
				
			 }
			 
		 }
		else if(temp1.x==738 && temp1.y==369)
			 {
				if(rolled == 1)
			{ temp1 = temp1.next;}
			else if(rolled == 2)
			{ temp1 = temp1.next.next;}
			 else if(rolled == 3)
			 {
				 temp1 = temp1.next.next.next;
			 }				 
				 
			 else if(rolled == 4)
			 {
				temp1.x = 618;
				temp1.y = 249;
				
			 }
		 }
		else if(temp1.x==738 && temp1.y==249)
			 {
			if(rolled == 1)
			{ temp1 = temp1.next;}
			else if(rolled == 2)
			{ temp1 = temp1.next.next;}
			 else if(rolled == 3)
			 {
				temp1.x = 618;
				temp1.y = 249;
				
			 }
			
		 }
		 else if(temp1.x==738 && temp1.y==129)
			 {
			 if(rolled == 1)
			 {
				 temp1 = temp1.next;
			 }
			else if(rolled == 2)
			 {
				temp1.x = 618;
				temp1.y = 249;
				
			 }
		 }
		else if(temp1.x==618 && temp1.y==129)
			 {
			 if(rolled == 1)
			 {
				temp1.x = 618;
				temp1.y = 249;
				
			 }
		 }
		 
		 else{
		for(var i =1; i<=rolled && temp1.next!==null; i++)
			temp1 = temp1.next;

		 }
	}
		
	//Player2's movement when he rolls
	function movep2(){
		var img1 = document.getElementById("img1");
		var img2 = document.getElementById("img2");
		var rolled = 1+parseInt(Math.floor(Math.random()*6));
		alert("Player2 rolled = "+rolled);
		
		movep2Validate(rolled);

		temp2.filled = true;
		img2.style.left = temp2.x + "px";
		img2.style.top = temp2.y + "px";
		
		//check whether player1 exist in the cell
		if(temp1.x==temp2.x && temp1.y==temp2.y && temp1.filled==true){
			alert("Player1 killed!!!");
			img1.style.left = p1.plist1.x + "px";
			img1.style.top = p1.plist1.y + "px";
			temp1 = p1.plist1;
			
		}
		
		//check whether player2 has reached the destination
		if(temp2.x==618 && temp2.y==249){
			alert("Player2 wins!!!!");
			document.body.style.backgroundColor= "green";
			document.getElementById("butt1").disabled = true;
			document.getElementById("butt2").disabled = true;
		}
			
	}
	
		function movep2Validate(rolled){
		
		 if(temp2.x==738 && temp2.y==129)
		 {	if(rolled == 1)
			{ temp2 = temp2.next;}
			else if(rolled == 2)
			{ temp2 = temp2.next.next;}
			 else if(rolled == 3)
			 {
				 temp2 = temp2.next.next.next;
			 }				 
				 
			 else if(rolled == 4)
			 { 
			temp2 = temp2.next.next.next.next;
			 }
			else if(rolled == 5)
			 {
				 temp2 = temp2.next.next.next.next.next;
			 }
			else if(rolled == 6)
			 {
				temp2.x = 618;
				temp2.y = 249;
				
			 }
			
		 }
		 else if(temp2.x==618 && temp2.y==129)
			 {
				if(rolled == 1)
			{ temp2 = temp2.next;}
			else if(rolled == 2)
			{ temp2 = temp2.next.next;}
			 else if(rolled == 3)
			 {
				 temp2 = temp2.next.next.next;
			 }				 
				 
			 else if(rolled == 4)
			 { 
			temp2 = temp2.next.next.next.next;
			 }
			else if(rolled == 5)
			 {
				temp2.x = 618;
				temp2.y = 249;
				
			 }
			
		 }
		else if(temp2.x==498 && temp2.y==129)
			 {
				if(rolled == 1)
			{ temp2 = temp2.next;}
			else if(rolled == 2)
			{ temp2 = temp2.next.next;}
			 else if(rolled == 3)
			 {
				 temp2 = temp2.next.next.next;
			 }				 
				 
			 else if(rolled == 4)
			 {
				temp2.x = 618;
				temp2.y = 249;
				
			 }
			
		 }
		else if(temp2.x==498 && temp2.y==249)
			 {
			if(rolled == 1)
			{ temp2 = temp2.next;}
			else if(rolled == 2)
			{ temp2 = temp2.next.next;}
			 else if(rolled == 3)
			 {
				temp2.x = 618;
				temp2.y = 249;
				
			 }
					 }
		 else if(temp2.x==498 && temp2.y==369)
			 {
			 if(rolled == 1)
			 {
				 temp2 = temp2.next;
			 }
			else if(rolled == 2)
			 {
				temp2.x = 618;
				temp2.y = 249;
				
			 }
			
		 }
		else if(temp2.x==618 && temp2.y==369)
			 {
			 if(rolled == 1)
			 {
				temp2.x = 618;
				temp2.y = 249;
				
			 }
			}
		 
		 else{
		for(var i =1; i<=rolled && temp2.next!==null; i++)
			temp2 = temp2.next;

		 }
	}