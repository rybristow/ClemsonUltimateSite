
menunum=0;menus=new Array();_d=document;function addmenu(){menunum++;menus[menunum]=menu;}function dumpmenus(){mt="<script language=javascript>";for(a=1;a<menus.length;a++){mt+=" menu"+a+"=menus["+a+"];"}mt+="<\/script>";_d.write(mt)}
//Please leave the above line intact. The above also needs to be enabled if it not already enabled unless this file is part of a multi pack.



////////////////////////////////////
// Editable properties START here //
////////////////////////////////////

// Special effect string for IE5.5 or above please visit http://www.milonic.co.uk/menu/filters_sample.php for more filters
if(navigator.appVersion.indexOf("MSIE 6.0")>0)
{
	effect = "Fade(duration=0.2);Alpha(style=0,opacity=88);Shadow(color='#777777', Direction=135, Strength=5)"
}
else
{
	effect = "Shadow(color='#777777', Direction=135, Strength=5)" // Stop IE5.5 bug when using more than one filter
}


timegap=500				// The time delay for menus to remain visible
followspeed=5			// Follow Scrolling speed
followrate=40			// Follow Scrolling Rate
suboffset_top=10;		// Sub menu offset Top position 
suboffset_left=10;		// Sub menu offset Left position

style1=[				// style1 is an array of properties. You can have as many property arrays as you need. This means that menus can have their own style.
"navy",					// Mouse Off Font Color
"ff9933",				// Mouse Off Background Color
"ffebdc",				// Mouse On Font Color
"4b0082",				// Mouse On Background Color
"000000",				// Menu Border Color 
12,						// Font Size in pixels
"normal",				// Font Style (italic or normal)
"normal",					// Font Weight (bold or normal)
"Verdana, Arial",		// Font Name
4,						// Menu Item Padding
"dropdown/arrow.gif",			// Sub Menu Image (Leave this blank if not needed)
,						// 3D Border & Separator bar
"666666",				// 3D High Color
"000099",				// 3D Low Color
"",				// Current Page Item Font Color (leave this blank to disable)
"",					// Current Page Item Background Color (leave this blank to disable)
"dropdown/arrowdn.gif",			// Top Bar image (Leave this blank to disable)
"ffffff",				// Menu Header Font Color (Leave blank if headers are not needed)
"000099",				// Menu Header Background Color (Leave blank if headers are not needed)
]



addmenu(menu=[		// This is the array that contains your menu properties and details
"mainmenu",			// Menu Name - This is needed in order for the menu to be called
20,					// Menu Top - The Top position of the menu in pixels
150,				// Menu Left - The Left position of the menu in pixels
,					// Menu Width - Menus width in pixels
1,					// Menu Border Width 
"center:bottom",					// Screen Position - here you can use "center;left;right;middle;top;bottom" or a combination of "center:middle"
style1,				// Properties Array - this is set higher up, as above
1,					// Always Visible - allows the menu item to be visible at all time (1=on/0=off)
"center",				// Alignment - sets the menu elements text alignment, values valid here are: left, right or center
effect,				// Filter - Text variable for setting transitional effects on menu activation - see above for more info
,					// Follow Scrolling - Tells the menu item to follow the user down the screen (visible at all times) (1=on/0=off)
1, 					// Horizontal Menu - Tells the menu to become horizontal instead of top to bottom style (1=on/0=off)
0,					// Keep Alive - Keeps the menu visible until the user moves over another menu or clicks elsewhere on the page (1=on/0=off)
,					// Position of TOP sub image left:center:right
,					// Set the Overall Width of Horizontal Menu to 100% and height to the specified amount (Leave blank to disable)
,					// Right To Left - Used in Hebrew for example. (1=on/0=off)
,					// Open the Menus OnClick - leave blank for OnMouseover (1=on/0=off)
,					// ID of the div you want to hide on MouseOver (useful for hiding form elements)
,					// Reserved for future use
,					// Reserved for future use
,					// Reserved for future use

,"Home","http://www.clemson.edu/ultimate/main.htm target=mainFrame",,"Back to the home page",1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"About the Chiefs","http://www.clemson.edu/ultimate/about.htm target=mainFrame",,"About the Joint Chiefs",1
,"Contact List","http://www.clemson.edu/ultimate/contact.htm target=mainFrame",,"Get in touch with other Chiefs",1
,"New Recruits&nbsp;&nbsp;","show-menu=recruits",,"Information for new and prospective Chiefs",1
,"Minutes","http://www.clemson.edu/ultimate/minutes.htm target=mainFrame",,"Minutes from our meetings",1
,"Media&nbsp;&nbsp;","show-menu=media",,"Photos, Videos, and other Downloads",1
,"Forum","http://pub72.ezboard.com/bclemsonultimate58092 target=mainFrame",,"Stay in touch with other Chiefs",1
,"Links","http://www.clemson.edu/ultimate/links.htm target=mainFrame",,"Links to other cool Ultimate-realated sites",1
])

	addmenu(menu=["media",
	,,185,1,"",style1,,"left",effect,,,,,,,,,,,,
	,"<img src=dropdown/newsimage.gif border=0>&nbsp;Photo Gallery","show-menu=photo",,,1
	,"<img src=dropdown/newsimage.gif border=0>&nbsp;Videos","show-menu=video",,,1
	,"<img src=dropdown/newsimage.gif border=0>&nbsp;Downloads","http://hubcap.clemson.edu/ultimate/downloads.htm target=mainFrame",,,1
	])
	
		addmenu(menu=["photo",
		,,170,1,"",style1,,"left",effect,,,,,,,,,,,,
		,"Open Sectionals","http://www.clemson.edu/ultimate/opensectionals01.htm target=mainFrame",,,0
		,"Joint Summit","http://www.clemson.edu/ultimate/joint_summit.htm target=mainFrame",,,0
		,"5 on 5","http://www.clemson.edu/ultimate/5on5.htm target=mainFrame",,,0
		,"The Parties","http://www.clemson.edu/ultimate/party.htm target=mainFrame",,,0
		,"Old Pics","http://www.clemson.edu/ultimate/oldpics.htm target=mainFrame",,,0
		])

		addmenu(menu=["video",
		,,170,1,"",style1,,"left",,,,,,,,,,,,,
		,"Robert at Summit Party","http://hubcap.clemson.edu/ultimate/vidrobert.htm target=mainFrame",,,0
		,"Chrispy at Mudbowl","http://hubcap.clemson.edu/ultimate/vidchrispy.htm target=mainFrame",,,0
		,"Mudbowl XXI","http://hubcap.clemson.edu/ultimate/vidmudbowl_xxi.htm target=mainFrame",,,0
		,"Joint Summit","http://hubcap.clemson.edu/ultimate/vidsummit.htm target=mainFrame",,,0
		])
	addmenu(menu=["recruits",
	,,185,1,"",style1,,"left",effect,,,,,,,,,,,,
	,"<img src=dropdown/newsimage.gif border=0>&nbsp;New Recruits Page","http://hubcap.clemson.edu/ultimate/recruits.htm target=mainFrame",,,1
	,"<img src=dropdown/newsimage.gif border=0>&nbsp;Practice","http://hubcap.clemson.edu/ultimate/practice.htm target=mainFrame",,,1
	])

dumpmenus()