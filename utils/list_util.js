const listFilter = () =>
    document.addEventListener("keyup", (e) => {
        if (e.target.matches(".seeker")) {
            if (e.key === "Escape") e.target.value = "";

            document.querySelectorAll(".card").forEach((fruta) => {
                fruta.textContent
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
                    ? fruta.classList.remove("filtro")
                    : fruta.classList.add("filtro");
            });
        }
    });

export const listUtils = {
    listFilter,
};
