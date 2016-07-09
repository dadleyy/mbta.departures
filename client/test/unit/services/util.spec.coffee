define [
  "services/util"
], (util) ->

  describe "util.pad test suite", ->

    it "should pad the given string", ->
      result = util.pad 4, 2
      (expect result).toBe "04"
