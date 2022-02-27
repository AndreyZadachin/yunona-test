import './pages/index.css';
/*import FormValidate from "./script/components/FormValidate";
import NewsApi from "./script/modules/NewsApi";
import NewsCard from "./script/components/NewsCard";
import NewsCardList from "./script/components/NewsCardList";
import DataStorage from "./script/modules/DataStorage";
*/
const acc = document.getElementsByClassName('accordion');
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active');
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
}
