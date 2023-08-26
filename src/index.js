import './assets/global.scss';

import Task from './domain/model/Task';
import { Button } from './presentation/ui-kit/Button';

const task = new Task(
  'Новая задача',
  'Сделать что-то очень важное.',
  new Date(),
);

const button = new Button(() => {
  console.log(task.title, task.description, task.createdAt)
}, 'Нажми меня');

const anotherButton = new Button(() => {
  console.log('Сообщение')
}, 'Другая кнопка');

document.body.appendChild(button.render());
document.body.appendChild(anotherButton.render());
