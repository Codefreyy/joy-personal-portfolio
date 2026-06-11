import {
  links,
  headerLanguageMap,
  experiencesData,
  experiencesDataZn,
  projectsData,
  skillsData,
} from "@/lib/data"

describe("lib/data", () => {
  describe("links", () => {
    it("should contain all expected navigation links", () => {
      const expectedNames = ["Home", "About", "Projects", "Skills", "Experiences"]
      const names = links.map((l) => l.name)
      expect(names).toEqual(expectedNames)
    })

    it("should have a hash starting with # for every link", () => {
      for (const link of links) {
        expect(link.hash).toMatch(/^#/)
      }
    })

    it("should not have duplicate names", () => {
      const names = links.map((l) => l.name)
      expect(new Set(names).size).toBe(names.length)
    })

    it("should not have duplicate hashes", () => {
      const hashes = links.map((l) => l.hash)
      expect(new Set(hashes).size).toBe(hashes.length)
    })
  })

  describe("headerLanguageMap", () => {
    it("should have a Chinese translation for every link name", () => {
      for (const link of links) {
        expect(headerLanguageMap).toHaveProperty(link.name)
        expect(
          (headerLanguageMap as Record<string, string>)[link.name]
        ).toBeTruthy()
      }
    })
  })

  describe("experiencesData", () => {
    it("should have at least one entry", () => {
      expect(experiencesData.length).toBeGreaterThan(0)
    })

    it("each entry should have required fields", () => {
      for (const exp of experiencesData) {
        expect(exp).toHaveProperty("title")
        expect(exp).toHaveProperty("location")
        expect(exp).toHaveProperty("description")
        expect(exp).toHaveProperty("icon")
        expect(exp).toHaveProperty("date")
      }
    })

    it("should have the same number of entries as experiencesDataZn", () => {
      expect(experiencesData.length).toBe(experiencesDataZn.length)
    })
  })

  describe("experiencesDataZn", () => {
    it("each entry should have required fields", () => {
      for (const exp of experiencesDataZn) {
        expect(exp).toHaveProperty("title")
        expect(exp).toHaveProperty("location")
        expect(exp).toHaveProperty("description")
        expect(exp).toHaveProperty("icon")
        expect(exp).toHaveProperty("date")
      }
    })
  })

  describe("projectsData", () => {
    it("should have at least one project", () => {
      expect(projectsData.length).toBeGreaterThan(0)
    })

    it("each project should have all required fields", () => {
      for (const project of projectsData) {
        expect(project.title).toBeTruthy()
        expect(project.title_zh).toBeTruthy()
        expect(project.description).toBeTruthy()
        expect(project.desc_zh).toBeTruthy()
        expect(project.tags.length).toBeGreaterThan(0)
        expect(project.imageUrl).toBeDefined()
        expect(project.projectUrl).toMatch(/^https?:\/\//)
        expect(project.demoUrl).toMatch(/^https?:\/\//)
      }
    })

    it("should not have duplicate project titles", () => {
      const titles = projectsData.map((p) => p.title)
      expect(new Set(titles).size).toBe(titles.length)
    })
  })

  describe("skillsData", () => {
    it("should have at least one skill", () => {
      expect(skillsData.length).toBeGreaterThan(0)
    })

    it("should not have duplicate skills", () => {
      expect(new Set(skillsData).size).toBe(skillsData.length)
    })

    it("each skill should be a non-empty string", () => {
      for (const skill of skillsData) {
        expect(typeof skill).toBe("string")
        expect(skill.trim().length).toBeGreaterThan(0)
      }
    })
  })
})
