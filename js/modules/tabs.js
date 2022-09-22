function tabs(tabsSeletor, tabsContentSelector, tabsParentSelector, activeClass) {
  // TABS

  const tabs = document.querySelectorAll(tabsSeletor),
        tabsContent = document.querySelectorAll(tabsContentSelector),
        tabsParent = document.querySelector(tabsParentSelector);

  hideTabContent();
  showTabContent();

  function hideTabContent() {
    tabsContent.forEach(item => 
      {
        item.classList.add('hide');
        item.classList.remove('show', 'fade');
      });
    tabs.forEach(item => item.classList.remove(activeClass));
  }

  function showTabContent(index = 0) {
    tabsContent[index].classList.add('show', 'fade');
    tabsContent[index].classList.remove('hide');
    tabs[index].classList.add(activeClass);
  }

  tabsParent.addEventListener('click', (e) => {
    const target = e.target;

    if (target && target.classList.contains(tabsSeletor.slice(1))) {
      tabs.forEach((item, index) => {
        if (target == item) {
          hideTabContent();
          showTabContent(index);
        }
      });
    }
  });
}

export default tabs;