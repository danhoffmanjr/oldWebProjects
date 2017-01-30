
  function navBarItemOn(navSection, sectionNav) {
    if (typeof (navSection.length) == 'undefined')
      return false;
    if (typeof (sectionNav.length) == 'undefined')
      return false;
    for ( var i = 0; i < navSection.length; i++) {
      var prodSection = navSection;
      //document.getElementById(prodSection).style.visibility = 'visible';
      //document.getElementById(prodSection).style.display = 'inline';
    }
    for ( var i = 0; i < sectionNav.length; i++) {
      var catSection = sectionNav;
      document.getElementById(catSection).className = 'navBarItemOn';
    }
  }
  function navBarItemOut(navSection, sectionNav) {
    if (typeof (navSection.length) == 'undefined')
      return false;
    if (typeof (sectionNav.length) == 'undefined')
      return false;
    for ( var i = 0; i < navSection.length; i++) {
      var prodSection = navSection;
      //document.getElementById(prodSection).style.visibility = 'visible';
      //document.getElementById(prodSection).style.display = 'none';
    }
    for ( var i = 0; i < sectionNav.length; i++) {
      var catSection = sectionNav;
      document.getElementById(catSection).className = 'navBarItemOut';
    }
  }
  function navDropdownsOn(navSection, sectionNav) {
    if (typeof (navSection.length) == 'undefined')
      return false;
    if (typeof (sectionNav.length) == 'undefined')
      return false;
    for ( var i = 0; i < navSection.length; i++) {
      var prodSection = navSection;
      document.getElementById(prodSection).style.zIndex = '603';
      //document.getElementById(prodSection).style.display = 'inline';
    }
    for ( var i = 0; i < sectionNav.length; i++) {
      var catSection = sectionNav;
      document.getElementById(catSection).className = 'navDropdownsOn';
    }
  }
  function navDropdownsOut(navSection, sectionNav) {
    if (typeof (navSection.length) == 'undefined')
      return false;
    if (typeof (sectionNav.length) == 'undefined')
      return false;
    for ( var i = 0; i < navSection.length; i++) {
      var prodSection = navSection;
      document.getElementById(prodSection).style.zIndex = '601';
      //document.getElementById(prodSection).style.display = 'none';
    }
    for ( var i = 0; i < sectionNav.length; i++) {
      var catSection = sectionNav;
      document.getElementById(catSection).className = 'navDropdownsOut';
    }
  }

  function getStyleObject(objectId) {
    // cross-browser function to get an object's style object given its id
    if(document.getElementById && document.getElementById(objectId)) {
      // W3C DOM
      return document.getElementById(objectId).style;
    } else if (document.all && document.all(objectId)) {
      // MSIE 4 DOM
      return document.all(objectId).style;
    } else if (document.layers && document.layers[objectId]) {
      // NN 4 DOM.. note: this won't find nested layers
      return document.layers[objectId];
    } else {
      return false;
    }
  } // getStyleObject

  function changeObjectVisibility(objectId, newVisibility) {
    var styleObject = getStyleObject(objectId);
    if(styleObject) {
      styleObject.visibility = newVisibility;
      return true;
    } else {
      return false;
    }
  } // changeObjectVisibility

  function showMenu(mOrder, eventObj) {
    hideMenus();
    var mId = 'menuTop' + mOrder;
    if(changeObjectVisibility(mId, 'visible')) {
      eventObj.cancelBubble = true;
      return true;
    } else {
      return false;
    }
  }

  var numMenusTop = 9;

  function hideMenus() {
    for(j = 1; j <= numMenusTop; j++) {
    changeObjectVisibility('menuTop' + j, 'hidden');
    }
  }
  
  function hideMenu(menuNumber) {
    changeObjectVisibility('menuTop' + menuNumber, 'hidden');
  }

  document.onclick = hideMenus;
  // END dropdown menu code

