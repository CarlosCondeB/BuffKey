const listFilter = () =>
    document.addEventListener("keyup", (e) => {
        if (e.target.matches(".seeker")) {
            if (e.key === "Escape") e.target.value = "";

            document.querySelectorAll(".card-name").forEach((item) => {
                item.textContent
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
                    ? item.parentElement.parentElement.classList.remove(
                          "filtro"
                      )
                    : item.parentElement.parentElement.classList.add("filtro");
            });
        }
    });

export const listUtils = {
    listFilter,
};
