const dropdownLogic = (() => {
  const _dropdown = document.getElementsByClassName("dropdown");

  const _toggleItems = (dropdown) => {
    const _dropdownItems = dropdown.querySelector(".dropdown-items");
    if (_dropdownItems.style.display === "block") {
      _dropdownItems.style.display = "none";
    } else {
      _dropdownItems.style.display = "block";
    }
  };

  const _setEvents = () => {
    Array.from(_dropdown).forEach((dropdown) => {
      dropdown.addEventListener("click", (e) => _toggleItems(e.currentTarget));
    });
  };

  _setEvents();
})();

export { dropdownLogic };
