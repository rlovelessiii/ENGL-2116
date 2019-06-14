// Constants

NUMSTEPS = 12;

$(document).ready(() => {
    console.log("document is ready");
    $.getJSON('steps.json', initSteps);
    $("#carousel").carousel('pause');
});

initSteps = (steps) => {
    $.each(steps, (key, value) => {
        $.each(value, (key, value) => {
            $("#step-list")
                .append(
                    $('<div class="card">')
                        .append(
                            $('<button class="btn btn-lg btn-primary" type="button" data-toggle="collapse" data-target="#step' + key + '"></button>')
                                .html("Step " + key))
                        .append(
                            $('<div class="collapse" id="step' + key + '" data-parent="#step-list"></div>')
                                .append(
                                    $('<div class="card-body"></div>')
                                        .html(value)
                                )
                        )
            )
        });
    });
};

showSlide = (slide) => {
    $("#carousel").carousel(slide)
};
