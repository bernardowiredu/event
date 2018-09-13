<template>
    <div>
        <charts :height="280" :width="400" :chart-data="datacollection" :options="{responsive: true, maintainAspectRatio: false}"></charts>
    </div>
</template>

<script>
    import charts from './charts.js'
    export default {
        name: "PieChart",
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
                            backgroundColor: ['#619fe8', '#E46651'],
                            fontFamily: '"Roboto", sans serif',
                            data: [40, 60]
                        }
                    ]

                }
            }
        }
    }
</script>
<style scoped>

</style>
