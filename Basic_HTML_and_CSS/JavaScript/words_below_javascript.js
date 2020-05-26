function Post_Click_String() {
			var String = "YEP! THAT'S DANGEROUS!";
			var result = String.fontcolor("red").fontsize(7).bold().italics();
			document.getElementById("wow").innerHTML = result;
		}