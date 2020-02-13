<template>
    <div class="topic">
        <div class="topic-body">
            <div class="header">
                <h1>title</h1>
                <h3>time</h3>
            </div>
            <div>
                <vue-simple-markdown :source="datat">
                </vue-simple-markdown>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "topic",
        data: () => ({
            datat: '``` javascript\n' +
                'var foo = function (bar) {\n' +
                '  return bar++;\n' +
                '};\n' +
                '\n' +
                'console.log(foo(5));\n' +
                '```\n' +
                '\n' +
                '``` go\n' +
                'package main\n' +
                '\n' +
                'import "fmt"\n' +
                '\n' +
                'func main() {\n' +
                '\tfmt.Println("Hello, world!")\n' +
                '}\n' +
                '```'
        })
    }
</script>

<style scoped>
    .header {

    }

    .topic {
        display: flex;
        justify-content: center;
        color: #74788d;
    }

    .topic-body {
        width: 70%;
        min-width: 450px;
        text-align: justify;
    }

    h1 {
        color: #48465b;
    }
</style>
