const listFilter = () =>
    document.addEventListener("keyup", (e) => {
        if (e.target.matches(".seeker")) {
            if (e.key === "Escape") e.target.value = "";

            document.querySelectorAll(".card").forEach((item) => {
                item.textContent
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
                    ? item.classList.remove("filtro")
                    : item.classList.add("filtro");
            });
        }
    });

export const listUtils = {
    listFilter,
};
