// Constants

NUMSTEPS = 12;

$(document).ready(() => {
    // Initialize the instructions from the config file
    $.getJSON('config.json', init);

    // Events
    $("#carousel").carousel('pause')
        .on('slide.bs.carousel', event => {
            $('#step' + event.to).collapse('show')
    }).on('slid.bs.carousel', () => {
        $('#carousel').carousel('pause')
    });
});

init = async (data) => {
    await initInfo(data.info);
    await initSteps(data.steps);
    await initSlides(data.images);
};

initInfo = (info) => {
    $('#title').html(info.title);
    $('#desc').html(info.description);
    $.each(info.materials, (key, value) => {
        $('#materials').append($('<li>' + value + '</li>'))
    });
    $.each(info.warnings, (key, value) => {
        $('#warnings').append($('<li>' + value + '</li>'))
    });
    $.each(info.authors, (key, value) => {
        $('#authors').append($('<li>' + value + '</li>'))
    })
};


initSteps = (steps) => {
    $.each(steps, (key, value) => {
        $("#step-list")
            .append(
                $('<div class="card">')
                    .append(
                        $('<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#step' + key + '"></button>')
                            .append($('<h5>' + value.title + '</h5>'))
                            .on('click', () => {
                                $('#carousel').carousel(parseInt(key)).carousel('pause');
                            }))
                    .append(
                        $('<div class="collapse" id="step' + key + '" data-parent="#step-list"></div>')
                            .append(
                                $('<div class="card-body"></div>')
                                    .html(value.details)
                            )
                    )
            )
    });
};

initSlides = (images) => {
    $.each(images, (key, value) => {
        $('#slides').append(
            $('<div class="carousel-item"></div>').append(
                $('<img src="assets/'+ value + '" class="d-block w-100">')
            )
        )
    })
};
