$(document).ready(() => {
  $(".red")
    .css("font-size", "24px")
    .css("color", "red")
    .css("text-transform", "undreline")
    .css("letter-spacing", "1rem");
});

const disableForm = () => {
  const formFields = $("form > input").attr("disabled", "true");
};
$(document).ready(disableForm);

$(document).ready(() => {
  $("a")
    .prepend("↗")
    .attr("target", "_blank")
    .each(function() {
      $(this).attr(
        "href",
        $(this)
          .attr("href")
          .replace("http://", "https://")
      );
    });

  const abort = () => {
    $("a")
      .removeAttr("target")
      .each(function() {
        $(this)
          .contents()
          .eq(0)
          .remove();
      });
  };

  $("<button />", {
    text: "отменить",
    click: abort,
    css: {
      position: "fixed",
      top: "30px",
      right: "60px"
    }
  }).appendTo("body");
});

$(document).ready(() => {
  const table = document.createElement("table");
  const tableHead = document.createElement("tr");
  ["текст", "эффект"].forEach(text => {
    const header = document.createElement("th");
    header.innerText = text;
    console.log(text);
    tableHead.appendChild(header);
  });
  table.appendChild(tableHead);
  ["fadeOut", "fadeToggle", "slideUp", "slideToggle"].forEach(effect => {
    const row = document.createElement("tr");

    const textCell = document.createElement("td");
    textCell.style.setProperty("display", "block");
    textCell.innerText = effect;

    const applyCell = document.createElement("td");
    const applyButton = document.createElement("button");
    applyButton.innerText = effect;
    applyButton.addEventListener("click", () => {
      $(textCell)[effect]();
    });
    applyCell.appendChild(applyButton);
    row.append(textCell, applyCell);
    table.appendChild(row);
  });

  const animationRow = document.createElement("tr");
  const textCell = document.createElement("td");
  textCell.innerText = "Animation";
  const applyCell = document.createElement("td");
  const applyButton = document.createElement("button");
  applyButton.innerText = "Animate";
  applyButton.addEventListener("click", () => {
    $(textCell).animate({ paddingLeft: "200px" });
  });
  applyCell.appendChild(applyButton);
  animationRow.append(textCell, applyCell);
  table.appendChild(animationRow);

  document.body.appendChild(table);
});

$(document).ready(() => {
  const oneLevelSearch = obj => {
    const result = document.createElement("div");
    for (let key in obj) {
      if (typeof obj[key] == "object") {
        const expandableRow = document.createElement("details");
        const summary = document.createElement("summary");
        summary.innerText = key;
        expandableRow.appendChild(summary);
        expandableRow.append(oneLevelSearch(obj[key]));
        expandableRow.style.marginLeft = "20px";
        result.appendChild(expandableRow);
      } else {
        const row = document.createElement("div");
        row.innerText = `${key}: ${obj[key]}`;
        row.style.marginLeft = "20px";
        result.appendChild(row);
      }
    }
    return result;
  };

  $.ajax({
    url: "https://inxaoc.github.io/example/ajax.json",
    success: body => {
      const result = document.createElement("div");
      console.dir(body);
      result.appendChild(oneLevelSearch(body));
      $('#result').append(result)
    }
  });
});
