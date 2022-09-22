function calculator() {

    // CALCULATOR

    const result = document.querySelector('.calculating__result span');
    const calcInputs = document.querySelectorAll('.calculating__choose input');
    const calcButtonsGender = document.querySelectorAll('#gender .calculating__choose-item');
    const calcButtonsActivity = document.querySelectorAll('.calculating__choose_big .calculating__choose-item');
    let gender, growth, weight, age, activityRatio;

    if (localStorage.getItem('gender')) {
      document.querySelector(`#gender #${localStorage.getItem('gender')}`).classList.add('calculating__choose-item_active');
    } else { 
      localStorage.setItem('gender', 'female'); 
      document.querySelector(`#gender #${localStorage.getItem('gender')}`).classList.add('calculating__choose-item_active');
    }

    if (localStorage.getItem('activity-ratio')) {
      document.querySelector(`#activity-ratio #${localStorage.getItem('activity-ratio')}`).classList.add('calculating__choose-item_active');
    } else { 
      localStorage.setItem('activity-ratio', 'low'); 
      document.querySelector(`#activity-ratio #${localStorage.getItem('activity-ratio')}`).classList.add('calculating__choose-item_active'); 
    } 
    
    setActiveButton(calcButtonsGender);
    setActiveButton(calcButtonsActivity);

    getCalculatorData();

    calcInputs.forEach(item => {
      item.addEventListener('input', () => {
        getCalculatorData();
        if (item.value.match(/\D/g)) {
          item.classList.add('wrong-input');
        } else {
          item.classList.remove('wrong-input');
        }
      });
    });

    function setActiveButton(buttonsCollection) {
      buttonsCollection.forEach(item => {
        item.addEventListener('click', () => {
          buttonsCollection.forEach(item => item.classList.remove('calculating__choose-item_active'));
          item.classList.add('calculating__choose-item_active');
          localStorage.setItem(item.parentNode.id, item.id);
          getCalculatorData();
        });
      });
    }

    function getCalculatorData() {
      gender = document.querySelector('#gender .calculating__choose-item_active').id;
      growth = document.querySelectorAll('.calculating__choose_medium input')[0].value;
      weight = document.querySelectorAll('.calculating__choose_medium input')[1].value;
      age = document.querySelectorAll('.calculating__choose_medium input')[2].value;
      activityRatio = document.querySelector('.calculating__choose_big .calculating__choose-item_active').getAttribute('data-attr');
      
      calculateCalories();
    }

    function calculateCalories() {
      if (!gender || !+growth || !+weight || !+age || !activityRatio) {
        result.textContent = '____';
        return
      }

      if (gender == 'female') {
        result.textContent = Math.floor((447.6 + (9.2 * weight) + (3.1 * growth) - (4.3 * age)) * activityRatio);
      } else {
        result.textContent = Math.floor((88.36 + (13.4 * weight) + (4.8 * growth) - (5.7 * age)) * activityRatio);
      }
    }
}

export default calculator;