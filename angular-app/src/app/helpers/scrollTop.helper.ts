declare var $: any;

export function scrollTop() {
    $('html,body').animate({
        scrollTop: 0
    }, 'fast');
}