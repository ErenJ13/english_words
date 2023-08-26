class Button {
  constructor(onClick, text) {
    this.onClick = onClick;
    this.text = text;
  }

  onClickHandler = () => {
    this.onClick();
  };

  render() {
    const button = document.createElement('button');

    button.addEventListener('click', this.onClickHandler);
    button.innerText = this.text;

    return button;
  }
}

export default Button;
