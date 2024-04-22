function changeColor(elementId) {
    // Reset the color of both links to default (if needed)
    document.getElementById('homeLink1').style.color = 'gray';
    document.getElementById('homeLink2').style.color = '';

    // Reset the color of both bars to default (if needed)
    document.getElementById('bar1').style.backgroundColor = '';
    document.getElementById('bar2').style.backgroundColor = '';

    // Set the color of the clicked link to green
    document.getElementById(elementId).style.color = 'green';

    // Set the color of the corresponding bar to green
    document.getElementById('bar' + elementId.slice(-1)).style.backgroundColor = 'green';
}

function getcolorchange(elementId) {
  
  document.getElementById('skillItem1').style.backgroundColor = '';
  document.getElementById('skillItem2').style.backgroundColor = '';
  // document.getElementById('skillItem3').style.backgroundColor = '';
  document.getElementById('skillItem4').style.backgroundColor = '';
  document.getElementById('skillItem5').style.backgroundColor = '';

  
  document.getElementById(elementId).style.backgroundColor = '#e6f3ef';

  
  document.querySelectorAll('.eachSkillItemBox > div').forEach(function(box) {
    box.style.display = 'none';
  });

  
  const boxNumber = elementId.slice(-1);
  document.querySelector('.skillItemBox' + boxNumber).style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
  const arrowContainer = document.querySelector('.skillItems'); // Assuming you have an arrow element inside the .skillItems container.
  const expandedBox = document.querySelector('.skillItemBox1');

  arrowContainer.addEventListener('click', function(event) {
    // Check if the clicked element is a skill item
    if (event.target.classList.contains('allSkillItems')) {
      const elementId = event.target.id;
      getcolorchange(elementId);
    }
  });
});

function getInnerColorChange(elementId){
  document.getElementById('iconId1').style.color = '#717479';
  document.getElementById('iconId2').style.color = '#717479';
  // document.getElementById('iconId3').style.color = '#717479';
  document.getElementById('iconId4').style.color = '#717479';
  document.getElementById('iconId5').style.color = '#717479';

  document.getElementById('iconDesc1').style.color = '#717479';
  document.getElementById('iconDesc2').style.color = '#717479';
  // document.getElementById('iconDesc3').style.color = '#717479';
  document.getElementById('iconDesc4').style.color = '#717479';
  document.getElementById('iconDesc5').style.color = '#717479';

  document.getElementById('iconId' + elementId.slice(-1)).style.color = 'green';
  document.getElementById('iconDesc' + elementId.slice(-1)).style.color = 'green';
  

  
}

function toggleExpand() {
  const button = document.querySelector('.iconBox');
  const expandText = document.querySelector('.expand');

  if (expandText.textContent === 'expand_more') {
    expandText.textContent = 'expand_less';
    button.classList.add('expanded');
  } else {
    expandText.textContent = 'expand_more';
    button.classList.remove('expanded');
  }
}

document.addEventListener('DOMContentLoaded', function() {
    const arrowContainer = document.querySelector('.iconBox');
    const expandedBox = document.querySelector('.expanded-box');
  
    arrowContainer.addEventListener('click', function() {
      // Toggle the display of the expanded box when the arrow is clicked
      expandedBox.style.display = expandedBox.style.display === 'none' ? 'block' : 'none';
    });
  });

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbarContainer');
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  
  


  

  


