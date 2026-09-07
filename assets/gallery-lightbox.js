(() => {
  let dialog;
  let image;
  let previousFocus;

  const close = () => {
    if (!dialog?.open) return;
    dialog.close();
  };

  const ensureDialog = () => {
    if (dialog) return dialog;

    dialog = document.createElement("dialog");
    dialog.className = "cosplay-lightbox";
    dialog.setAttribute("aria-label", "코스프레 사진 확대 보기");
    dialog.innerHTML = `
      <div class="cosplay-lightbox__frame">
        <button class="cosplay-lightbox__close" type="button" aria-label="확대 이미지 닫기">&times;</button>
        <img class="cosplay-lightbox__image" alt="" />
      </div>
    `;
    image = dialog.querySelector(".cosplay-lightbox__image");

    dialog.querySelector(".cosplay-lightbox__close").addEventListener("click", close);
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) close();
    });
    dialog.addEventListener("close", () => {
      document.body.classList.remove("has-cosplay-lightbox");
      image.removeAttribute("src");
      previousFocus?.focus();
    });

    document.body.append(dialog);
    return dialog;
  };

  document.addEventListener("click", (event) => {
    const link = event.target.closest(".cosplay-gallery a");
    if (!link) return;

    event.preventDefault();
    previousFocus = link;
    const modal = ensureDialog();
    image.src = link.href;
    image.alt = link.querySelector("img")?.alt || "코스프레 확대 사진";
    document.body.classList.add("has-cosplay-lightbox");
    modal.showModal();
  });
})();
