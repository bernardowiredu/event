<template>
    <div>

        <ul class="mfb-component--br mfb-slidein" data-mfb-toggle="hover">
            <li class="mfb-component__wrap">
                <!-- the main menu button -->
                <a data-mfb-label="menu" class="mfb-component__button--main">
                    <!-- the main button icon visibile by default -->
                    <i class="mfb-component__main-icon--resting ion-plus-round"></i>
                    <!-- the main button icon visibile when the user is hovering/interacting with the menu -->
                    <i class="mfb-component__main-icon--active ion-close-round"></i>
                </a>
                <ul class="mfb-component__list">
                    <!-- a child button, repeat as many times as needed -->
                    <li>
                        <a href=".modal-full-1" uk-toggle data-mfb-label="Contact us" class="mfb-component__button--child">
                            <i class="mfb-component__child-icon ion-social-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href=".modal-full-2" uk-toggle data-mfb-label="Help" class="mfb-component__button--child">
                            <i class="mfb-component__child-icon ion-speakerphone"></i>
                        </a>
                    </li>
                    <li>
                        <a href=".modal-full-3" uk-toggle data-mfb-label="Create new event" class="mfb-component__button--child">
                            <i class="mfb-component__child-icon ion-help-circled"></i>
                        </a>
                    </li>
                </ul>
            </li>
        </ul>

    </div>
</template>

<script>

    export default {
        name: "float-button"
    }
</script>

<style scoped>

</style>
