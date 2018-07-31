<template>
    <div>
        <nav class="Subnav nav nav--timiro">
            <button class="nav__item" aria-label="Item 1"></button>
            <button class="nav__item" aria-label="Item 2"></button>
            <button class="nav__item" aria-label="Item 3"></button>
            <button class="nav__item" aria-label="Item 4"></button>
            <button class="nav__item" aria-label="Item 5"></button>
            <button class="nav__item" aria-label="Item 6"></button>
            <button class="nav__item" aria-label="Item 7"></button>
            <button class="nav__item" aria-label="Item 8"></button>
        </nav>
    </div>
</template>

<style scoped>
    .nav {
        position: relative;
        width: 8em;
        margin: 0 0 0 3em;
    }

    .nav__item {
        line-height: 1;
        position: relative;
        display: block;
        margin: 0;
        padding: 0;
        letter-spacing: 0;
        color: currentColor;
        border: 0;
        background: none;
    }

    .nav__item:focus {
        outline: none;
    }

    /*** Xusni ***/

    .nav--xusni .nav__item {
        width: 3em;
        height: 1.25em;
        margin: 0.5em 0;
    }

    .nav--xusni .nav__item::after {
        content: '';
        position: absolute;
        top: 35%;
        left: 0;
        width: 100%;
        height: 30%;
        background: #3c4a9a;
        transform-origin: 0 0;
        transition: transform 0.5s, background-color 0.5s;
        transition-timing-function: cubic-bezier(0.7,0,0.3,1);
    }

    .nav--xusni .nav__item:not(.nav__item--current):hover::after,
    .nav--xusni .nav__item:not(.nav__item--current):focus::after {
        background: #212956;
        transition: background-color 0.3s;
    }

    .nav--xusni .nav__item--current::after {
        background: #212956;
        transform: scale3d(0.2,1,1);
    }

    .nav--xusni .nav__item-title {
        margin: 0 0 0 1em;
        opacity: 0;
        display: block;
        transform: translate3d(2em,0,0);
        transition: opacity 0.5s, transform 0.5s;
        transition-timing-function: cubic-bezier(0.7,0,0.3,1);
    }

    .nav--xusni .nav__item--current .nav__item-title {
        opacity: 1;
        transform: translate3d(0,0,0);
        transition-delay: 0.1s;
    }
</style>