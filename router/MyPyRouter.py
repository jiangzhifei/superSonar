import tornado.httpserver
import tornado.ioloop
import tornado.options
import tornado.web
import os.path

from tornado.options import define, options

define("port", default=8080, help="run on the given port", type=int)


class Application(tornado.web.Application):
    def __init__(self):
        handlers = [
            (r"/", IndexHandler),
            (r"/tech", TechHandler)
        ]
        settings = dict(
            template_path=os.path.join(os.path.dirname(__file__), "../page"),
            static_path=os.path.join(os.path.dirname(__file__), "../static"),
            debug=True,
        )
        tornado.web.Application.__init__(self, handlers, **settings)


class IndexHandler(tornado.web.RequestHandler):
    @tornado.gen.coroutine
    def get(self):
        # greeting = self.get_argument('greeting', 'Hello')
        # self.write(greeting + ', friendly user!')

        # title = '球汇,用科技为您打造自己的运动圈'
        self.render("index.html",title="球汇,用科技为您打造自己的运动圈")

class TechHandler(tornado.web.RequestHandler):
    @tornado.gen.coroutine
    def get(self):
        self.render("tech.html")


if __name__ == "__main__":
    tornado.options.parse_command_line()
    app = Application()
    http_server = tornado.httpserver.HTTPServer(app)
    http_server.listen(options.port)
    tornado.ioloop.IOLoop.current().start()