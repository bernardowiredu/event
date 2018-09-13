<template>
    <div>
        <charts :height="350" :width="800" :chart-data="datacollection" :options="{responsive: true, maintainAspectRatio: false}"></charts>
    </div>
</template>

<script>
    import charts from 'Components/charts/charts.js'
    export default {
        name: "BarCharts",
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
                    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8','Day 9'],
                    datasets: [
                        {
                            label: 'Event Attendees',
                            backgroundColor: 'transparent',//#619fe8
                            borderColor:'#619fe8',
                            fontFamily: '"Roboto, sans serif',
                            data: [40, 23, 34, 15, 45, 28, 30, 5, 20]
                        }
                    ]

                }
            }
        }
    }
</script>
<style scoped>

</style>
