<template>
    <div>
        <charts :height="180" :width="300" :chart-data="datacollection" :options="{responsive: true, maintainAspectRatio: false}"></charts>
    </div>
</template>

<script>
    import charts from './charts.js'
    export default {
        name: "pie-event",
        components: {
            charts
        },

            data() {
                return {
                    datacollection: null
                }
            },
            mounted() {
                this.fillData()
            },
            methods: {
                fillData() {
                    this.datacollection = {
                        labels: ['Attending', 'Not Attending'],
                        datasets: [
                            {
                                label: 'Event Attendees',
                                backgroundColor: ['#619fe8', '#C1c4c5'],
                                fontFamily: '"Roboto", sans serif',
                                position:'align-left',
                                data: [80, 20]
                            }
                        ]

                    }
                }
            }

    }
</script>

<style scoped>

</style>
