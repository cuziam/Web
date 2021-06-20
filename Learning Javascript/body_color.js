var body=
{
  setBgcolor: function(Bgcolor)
  {
    document.querySelector('body').style.backgroundColor=Bgcolor;
  },
  setColor: function(color)
  {
    document.querySelector('body').style.color=color;
  },
  setTextcolor: function(text_color)
  {
    var links =document.querySelectorAll('a');
    var i=0;
    for(i=0;i<links.length;i++)
    {
      links[i].style.color=text_color;
    }
  }
};

function nightdayhandler(self)
{
  if(self.value ==='night')
  {
    body.setBgcolor('white');
    body.setColor('black');
    self.value='day';
    body.setTextcolor("powderblue");
  }
  else
  {
    body.setBgcolor('black');
    body.setColor('white');
    self.value='night';
    body.setTextcolor("blue");
   }
  }
