function toggleSections() {

// Based on code by kpdavatar@netbroadcaster.com
    function DecToHex(DecNum, Group, Sign, Dollar) {
		// DecNum = Decimal Number In
		// Group = Number of digit to show
		// Sign = 0 no sign / Sign = 1 show sign
		// Dollar = 0 no $ / Dollar = 1 show $
		// 0xFF javascript hex value
		// 4294967296 dec = 0x100000000 hex too big
		// 268435456 dec = 0x10000000 hex
		// 16777216 dec = 0x1000000 hex
		// 1048576 dec = 0x100000 hex
		// 65536 dec = 0x10000 hex
		// 4096 dec = 0x1000 hex
		// 256 dec = 0x100 hex
		// 16 dec = 0x10 hex
		// 1 dec = 0x01 hex
		var HexChars = "0123456789ABCDEF";
		var HexOut = "00000000";
		var H7 = 0;
		var H6 = 0;
		var H5 = 0;
		var H4 = 0;
		var H3 = 0;
		var H2 = 0;
		var H1 = 0;
		var H0 = 0;
		var a = 0;
		var b = 0;
		var g = 1;
		var s = 0;
		var st = 0;
		var d = 0;
		s = 0;
		st = 0;
		if (Sign == 1) {
			s = 1;
		}
		d = 0;
		if (Dollar == 1) {
			d = 1;
		}
		g = 1;
		g = Group;
		if (g < 1 || g > 8) {
			document.ConvForm.MSG.value = "5:Group Error " + a;
			} else {
				a = DecNum;
			if (a < 0) {
				st = 1;
				a = a * -1;
			}
			if (a > 0xFFFFFFFF) {
				document.ConvForm.MSG.value = "5:Dec Error " + a;
			} else {
				b = a % 0x10000000;
				H7 = (a - b) / 0x10000000;
				a = b;
				b = a % 0x1000000;
				H6 = (a - b) / 0x1000000;
				a = b;
				b = a % 0x100000;
				H5 = (a - b) / 0x100000;
				a = b;
				b = a % 0x10000;
				H4 = (a - b) / 0x10000;
				a = b;
				b = a % 0x1000;
				H3 = (a - b) / 0x1000;
				a = b;
				b = a % 0x100;
				H2 = (a - b) / 0x100;
				a = b;
				b = a % 0x10;
				H1 = (a - b) / 0x10;
				H0 = b;
			}
		}
		HexOut = "";
		if (s == 1) {
			if (st == 1) {
				HexOut += "-";
			} else {
				HexOut += "+";
			}
		}
		if (d == 1) {
			HexOut += "$";
		}
		if (g > 7) {
			HexOut += HexChars.charAt(H7);
		}
		if (g > 6) {
			HexOut += HexChars.charAt(H6);
		}
		if (g > 5) {
			HexOut += HexChars.charAt(H5);
		}
		if (g > 4) {
			HexOut += HexChars.charAt(H4);
		}
		if (g > 3) {
			HexOut += HexChars.charAt(H3);
		}
		if (g > 2) {
			HexOut += HexChars.charAt(H2);
		}
		if (g > 1) {
			HexOut += HexChars.charAt(H1);
		}
		HexOut += HexChars.charAt(H0);
		// output HexOut
		return HexOut;
    }
    // Based on code by kpdavatar@netbroadcaster.com & RealUnimportant
    function Joker() {
		// Find Where to put Joker's
		var JHex = document.JokerForm.JokerHex;
		var RJHex = document.JokerForm.RJokerHex;

		// var for Storing joker
		var CJ = "0000";
		var CH3 = "3";
		var CH2 = "2";
		var CH1 = "1";
		var CH0 = "0";

		// vars for adding
		var NY3 = 0;
		var NY2 = 0;
		var NY1 = 0;
		var NY0 = 0;
		var s = "0";

		// make JokerHex
		NY0 = 0;
		if (document.JokerForm.Select.checked) {
		NY0 = 1;
		}
		if (document.JokerForm.L3.checked) {
		NY0 += 2;
		}
		if (document.JokerForm.R3.checked) {
		NY0 += 4;
		}
		if (document.JokerForm.Start.checked) {
		NY0 += 8;
		}
		NY1 = 0;
		if (document.JokerForm.Up.checked) {
		NY1 = 1;
		}
		if (document.JokerForm.Right.checked) {
		NY1 += 2;
		}
		if (document.JokerForm.Down.checked) {
		NY1 += 4;
		}
		if (document.JokerForm.Left.checked) {
		NY1 += 8;
		}
		NY2 = 0;
		if (document.JokerForm.L2.checked) {
		NY2 = 1;
		}
		if (document.JokerForm.R2.checked) {
		NY2 += 2;
		}
		if (document.JokerForm.L1.checked) {
		NY2 += 4;
		}
		if (document.JokerForm.R1.checked) {
		NY2 += 8;
		}
		NY3 = 0;
		if (document.JokerForm.Triangle.checked) {
		NY3 = 1;
		}
		if (document.JokerForm.Circle.checked) {
		NY3 += 2;
		}
		if (document.JokerForm.X.checked) {
		NY3 += 4;
		}
		if (document.JokerForm.Square.checked) {
		NY3 += 8;
		}

		// Put out JokerHex
		CH3 = DecToHex(NY3);
		CH2 = DecToHex(NY2);
		CH1 = DecToHex(NY1);
		CH0 = DecToHex(NY0);
		CJ = CH3 + CH2 + CH1 + CH0;
		JHex.value = CJ;


		// make RJokerHex
		NY0 = 15;
		if (document.JokerForm.Select.checked) {
		NY0 -= 1;
		}
		if (document.JokerForm.L3.checked) {
		NY0 -= 2;
		}
		if (document.JokerForm.R3.checked) {
		NY0 -= 4;
		}
		if (document.JokerForm.Start.checked) {
		NY0 -= 8;
		}
		NY1 = 15;
		if (document.JokerForm.Up.checked) {
		NY1 -= 1;
		}
		if (document.JokerForm.Right.checked) {
		NY1 -= 2;
		}
		if (document.JokerForm.Down.checked) {
		NY1 -= 4;
		}
		if (document.JokerForm.Left.checked) {
		NY1 -= 8;
		}
		NY2 = 15;
		if (document.JokerForm.L2.checked) {
		NY2 -= 1;
		}
		if (document.JokerForm.R2.checked) {
		NY2 -= 2;
		}
		if (document.JokerForm.L1.checked) {
		NY2 -= 4;
		}
		if (document.JokerForm.R1.checked) {
		NY2 -= 8;
		}
		NY3 = 15;
		if (document.JokerForm.Triangle.checked) {
		NY3 -= 1;
		}
		if (document.JokerForm.Circle.checked) {
		NY3 -= 2;
		}
		if (document.JokerForm.X.checked) {
		NY3 -= 4;
		}
		if (document.JokerForm.Square.checked) {
		NY3 -= 8;
		}

		// Put out RJokerHex
		CH3 = DecToHex(NY3);
		CH2 = DecToHex(NY2);
		CH1 = DecToHex(NY1);
		CH0 = DecToHex(NY0);
		CJ = CH3 + CH2 + CH1 + CH0;
		RJHex.value = CJ;
    }

    let jokerFormInputs = [...document.JokerForm.getElementsByTagName('INPUT')];
    jokerFormInputs.forEach( input => {
    	input.addEventListener("click", () => Joker());
    });

} window.addEventListener('load',toggleSections);

